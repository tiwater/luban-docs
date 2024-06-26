import json
import os
import shutil

# Load the JSON data
nodes_file_path = './tools/nodes.json'
categories_file_path = './tools/categories.json'

with open(nodes_file_path, 'r', encoding='utf-8') as file:
    nodes_data = json.load(file)

with open(categories_file_path, 'r', encoding='utf-8') as file:
    categories_data = json.load(file)

# Define the output directory
output_dir = './docs/99-reference/nodes/'

# Clean the target directory
if os.path.exists(output_dir):
    shutil.rmtree(output_dir)
os.makedirs(output_dir, exist_ok=True)

# Create the static _category_.json under the nodes folder
static_category_json_content = {
    "label": "Nodes",
    "link": {
        "type": "generated-index"
    }
}
static_category_json_path = os.path.join(output_dir, '_category_.json')
with open(static_category_json_path, 'w', encoding='utf-8') as json_file:
    json.dump(static_category_json_content, json_file, indent=2)

# Function to escape necessary characters for markdown
def escape_markdown_chars(text):
    return text.replace('{{', '&#123;&#123;').replace('}}', '&#125;&#125;').replace('{', '&#123;').replace('}', '&#125;').replace('\n', '  \n').replace('`', '\\`').replace('|', '\\|')

# Function to generate MDX content for a node
def generate_mdx_content(node, slug):
    mdx_content = f"---\nid: {node['id']}\nslug: {slug}\n---\n\n"
    mdx_content += f"# {node['template']['name']}\n\n"
    mdx_content += f"**Description**: {escape_markdown_chars(node['template']['description'])}\n\n"
    mdx_content += f"**Type**: {escape_markdown_chars(node['type'])}\n\n"
    
    if 'inputs' in node['template']:
        mdx_content += "## Inputs\n\n"
        mdx_content += "| Name | Type | Description |\n| --- | --- | --- |\n"
        for input in node['template']['inputs']:
            input_type = input.get('type', 'Unknown')
            mdx_content += f"| **{escape_markdown_chars(input['name'])}** | {escape_markdown_chars(input_type)} | {escape_markdown_chars(input['description'])} |\n"

    if 'outputs' in node['template']:
        mdx_content += "## Outputs\n\n"
        mdx_content += "| Name | Type | Description |\n| --- | --- | --- |\n"
        for output in node['template']['outputs']:
            output_type = output.get('type', 'Unknown')
            description = escape_markdown_chars(output['description'])
            mdx_content += f"| **{escape_markdown_chars(output['name'])}** | {escape_markdown_chars(output_type)} | {description} |\n"

    if 'options' in node['template']:
        mdx_content += "## Options\n\n"
        mdx_content += "| Name | Type | Description |\n| --- | --- | --- |\n"
        for option in node['template']['options']:
            option_type = option.get('type', 'Unknown')
            description = escape_markdown_chars(option.get('description', 'No description provided'))
            mdx_content += f"| **{escape_markdown_chars(option['name'])}** | {escape_markdown_chars(option_type)} | {description} |\n"

    return mdx_content

# Group nodes by their tags (categories)
nodes_by_category = {}
for node in nodes_data:
    categories = node.get('tags', ['Uncategorized'])
    for category in categories:
        if category not in nodes_by_category:
            nodes_by_category[category] = []
        nodes_by_category[category].append(node)

# Generate MDX files and _category_.json for each category
for category, nodes in nodes_by_category.items():
    category_dir = os.path.join(output_dir, category)
    os.makedirs(category_dir, exist_ok=True)
    
    # Create _category_.json file
    category_label = categories_data.get(category, category)
    category_json_content = {
        "label": category_label,
        "link": {
            "type": "generated-index"
        }
    }
    category_json_path = os.path.join(category_dir, '_category_.json')
    with open(category_json_path, 'w', encoding='utf-8') as json_file:
        json.dump(category_json_content, json_file, indent=2)
    
    for node in nodes:
        file_name = node['template']['id']
        mdx_content = generate_mdx_content(node, file_name)
        file_path = os.path.join(category_dir, f"{file_name}.mdx")
        with open(file_path, 'w', encoding='utf-8') as mdx_file:
            mdx_file.write(mdx_content)

print(f"MDX files and _category_.json files have been generated in {output_dir}")

import os, json

blog_dir = "blog"

# Only include files/folders that don’t start with "." or "_"
blogs = [
    name for name in os.listdir(blog_dir) 
    if not name.startswith(".") and not name.startswith("_")
]

# Save as index.json inside /blog
with open(os.path.join(blog_dir, "index.json"), "w") as f:
    json.dump(blogs, f, indent=2)

print(f"✅ Generated {len(blogs)} blog entries in blog/index.json")

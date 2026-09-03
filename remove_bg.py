from rembg import remove
from PIL import Image
import os

input_path = 'public/logo.jpeg'
output_path = 'public/logo.png'

try:
    print("Loading image...")
    input_image = Image.open(input_path)
    
    print("Removing background (this may download a model on first run)...")
    output_image = remove(input_image)
    
    print("Saving transparent image...")
    output_image.save(output_path, 'PNG')
    print("Done successfully!")
except Exception as e:
    print(f"Error: {e}")

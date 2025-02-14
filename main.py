from models.groq_chat import groq_chat  # Import groq_chat from models.groq_chat
from models.generate_image import generate_image  # Import generate_image from models.generate_image
import os
from dotenv import load_dotenv
load_dotenv()
import os
from openai import OpenAI
import requests
import base64 




if __name__ == "__main__":
    # Replace with your Groq API key
    GROQ_API_KEY = os.getenv("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") or "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"
    
    # change Your input text!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    post_TRENDS = "#valentine's day "
    image_TRENDS = ""

    post = groq_chat(GROQ_API_KEY, "in english give me post discription about these trends (without introduction) :" + post_TRENDS)
    if "<think>" in post:
        post = post.split("</think>")[-1].strip()

    image_description = groq_chat(GROQ_API_KEY, "In English, give me a concise image description about this post (the length must be between 1 and 1000) (characters without introductions)." + post)
    if "<think>" in image_description:
        image_description = image_description.split("</think>")[-1].strip()
    
    print("Post:", post)
    image = generate_image(image_description)

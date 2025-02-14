# First install the required package
# pip install openai

import os
from openai import OpenAI

def groq_chat(api_key, user_message, model="deepseek-r1-distill-qwen-32b"):
    # Initialize the client with Groq's API
    client = OpenAI(
        api_key=api_key,
        base_url="https://api.groq.com/openai/v1",
    )

    # Create chat completion
    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": user_message,
            }
        ],
        model=model,
    )

    # Return the response content
    return chat_completion.choices[0].message.content

# 🌟 X Post Trend: Automate Trend Posting on X (Twitter) 🚀

Welcome to **X Post Trend**! This project allows you to automatically generate and post trending content on X (formerly Twitter) using AI. It combines the power of **Groq AI**, **Stability AI**, and **Playwright** to create engaging posts with images based on the latest trends.

Whether you're a social media manager, content creator, or just someone who loves staying on top of trends, this tool will save you time and effort while keeping your X feed fresh and relevant.

---

## ✨ Features

- **Trend Detection**: Fetches the latest trends from TikTok Trends.
- **AI-Powered Post Generation**: Uses Groq AI to generate engaging post descriptions.
- **AI-Generated Images**: Creates unique images using Stability AI based on the post content.
- **Automated Posting**: Posts the generated content directly to your X (Twitter) account.
- **Easy Configuration**: Update your X credentials and API keys in a simple `.env` file.

---

## 🛠️ Installation

Follow these steps to set up and run the project:

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/x-post-trend.git
cd x-post-trend
 ` ``` ` 


2. Install Dependencies

Install all the required Python packages:
pip install -r requirements.txt


3. Install Playwright Browsers
This project uses Playwright for browser automation. Install the required browsers:
playwright install

4. Set Up Environment Variables
Create a .env file in the root directory and add the following variables:
APIKEY=<your-groq-api-key>
IMAPIKEY=<your-stability-ai-api-key>
TWITTER_USERNAME=""
TWITTER_PASSWORD=""

🚀 Usage
1. Run the Flask Server
Start the Flask server to enable the web interface:
python server.py

3. Access the Web Interface
Open your browser and navigate to:
http://127.0.0.1:5001

3. Update Your X Credentials
Enter your X (Twitter) username and password in the web interface and click "Post On X the top trends now".

4. Let the Magic Happen! ✨
The application will:

Fetch the latest trends.

Generate a post using Groq AI.

Create an image using Stability AI.

Post the content to your X account.

🙏 Acknowledgments
Groq AI: For providing the AI model to generate post descriptions.

Stability AI: For generating stunning images.

Playwright: For automating the X (Twitter) posting process.

TikTok Trends: For providing the latest trends.

💬 Feedback
If you have any questions, suggestions, or issues, feel free to open an issue or reach out to me at zayd.benfadhel@supcom.tn, mohamed.mdhaffar@supcom.tn, jawher.sadok@supcom.tn .

Happy Posting! 🎉
Let’s make your X feed the trendiest out there! 🚀

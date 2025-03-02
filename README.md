# DeepSeek Code Companion

## Overview
DeepSeek is an AI-powered coding assistant built with Streamlit and LangChain. It helps you with coding questions, debugging, and code documentation.

## Features
- Python Expert
- Debugging Assistant
- Code Documentation
- Solution Design

## Requirements
- Python 3.8+
- Streamlit
- LangChain Core
- LangChain Community
- LangChain Ollama
- PDFPlumber

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/deepseek.git
    cd deepseek
    ```

2. Create a virtual environment and activate it:
    ```sh
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. Install the required packages:
    ```sh
    pip install -r RAG/requirements.txt
    ```

## Running the Application

1. Navigate to the [RAG](http://_vscodecontentref_/2) directory:
    ```sh
    cd RAG
    ```

2. Run the Streamlit application:
    ```sh
    streamlit run rag_deep.py
    ```

3. Open your web browser and go to `http://localhost:8501` to access the application.

## Configuration

- You can configure the model and other settings in the sidebar of the application.

## Deployment

For deployment instructions, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
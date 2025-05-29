import openai_whisper as whisper
from transformers import pipeline

# Audio-to-text using Whisper
def audio_to_text(audio_path):
    try:
        model = whisper.load_model("small")
        result = model.transcribe(audio_path)
        return result["text"]
    except FileNotFoundError:
        return "Audio file not found. Please provide a valid audio file."

# Generate interview response using Llama (simulated with OPT-350m)
def generate_interview_response(text_input):
    generator = pipeline("text-generation", model="facebook/opt-350m")  # Llama placeholder
    prompt = f"As an HR interview coach, respond to: {text_input}"
    response = generator(prompt, max_length=100, num_return_sequences=1)[0]["generated_text"]
    return response

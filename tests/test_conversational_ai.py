import pytest
from src.conversational_ai import audio_to_text

def test_audio_to_text():
    text = audio_to_text("non_existent_audio.wav")
    assert text == "Audio file not found. Please provide a valid audio file."

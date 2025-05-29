import pytest
from src.federated_learning import federated_learning_setup

def test_federated_learning_setup():
    data = [1.0]
    client, data_tensor = federated_learning_setup(data)
    assert client.id == "client"
    assert data_tensor.shape == (1,)

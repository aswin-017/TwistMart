const API_BASE_URL = 'http://localhost:8080/api'; // Update with your backend URL

// Add a new address
export const addAddressToAPI = async (address) => {
  try {
    const response = await fetch(`${API_BASE_URL}/addresses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // If using authentication
      },
      body: JSON.stringify(address),
    });

    if (!response.ok) {
      throw new Error('Failed to add address.');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding address:', error);
    throw error;
  }
};

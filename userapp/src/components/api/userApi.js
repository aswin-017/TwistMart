const API_BASE_URL = 'http://localhost:8080/api'; // Update with your backend URL

// Fetch user details
export const fetchUserDetailsFromAPI = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/user/details`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`, // If using authentication
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch user details.');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user details:', error);
        throw error;
    }
};

// Fetch user addresses
export const fetchAddressesFromAPI = async (userId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/addresses/user/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`, // If using authentication
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch addresses.');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching addresses:', error);
        throw error;
    }
};

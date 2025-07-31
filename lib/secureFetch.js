const getToken = () => localStorage.getItem('jwt_token');

export const secureFetch = async (URL, options = {}) => {
    const token = getToken();

    const isFormData = options.body instanceof FormData;

    const headers = {
        ...(isFormData ? {} : {'Content-Type': 'application/json'}),
        ...(token && {Authorization: `Bearer ${token}`}),
        ...options.headers,
    };

    const response = {
        ...options,
        headers,
    };

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Request ailed: ${response.status}`);
    }

    if (response.status === 204) return null;

    const contentType = response.headers.get('content-type');
    return contentType && contentType.includes('application/json')
        ? response.json()
        : response.text();
};
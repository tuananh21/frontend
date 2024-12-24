export const getHeaders = (token) => ({
    Authorization: `Bearer ${token}`,
});

export const fileHeader = () => ({
    "Content-Type": "multipart/form-data",
})
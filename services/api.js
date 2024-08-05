import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://nvapdujaajxvdiucqzcx.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52YXBkdWphYWp4dmRpdWNxemN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI4NTU0MDAsImV4cCI6MjAzODQzMTQwMH0.mUoyysLI_LZyUtemzmyA2KjBWeUY121IOe0VZePskoU",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52YXBkdWphYWp4dmRpdWNxemN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI4NTU0MDAsImV4cCI6MjAzODQzMTQwMH0.mUoyysLI_LZyUtemzmyA2KjBWeUY121IOe0VZePskoU"
    }
})
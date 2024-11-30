import { useState } from 'react';
import axios, {AxiosRequestConfig} from "axios";

export const useApiCall = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const callApi = async (config: AxiosRequestConfig) => {
        setLoading(true);
        setError(null);

        try {
            console.log('check congfig are here ',config);
            const response = await axios(config);
            setData(response.data);
            return response.data;


        } catch (err: any) {
            setError(err.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, callApi };
};

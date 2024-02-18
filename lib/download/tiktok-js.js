class TiktokJs {
    constructor() {
        this.apiUrl = 'https://tiktokjs-downloader.vercel.app/api/v1/';
    }

    async fetchData(tiktok, endpoint) {
        try {
            const url = `${this.apiUrl}${endpoint}?url=${tiktok}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': '*/*'
                }
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }

    displayEndpoints() {
        const endpoints = [
            'aweme', 'musicaldown', 'savetik', 'snaptik', 'snaptikpro',
            'ssstik', 'tikcdn', 'tikmate', 'tiktokdownloadr', 'tikwm', 'ttdownloader'
        ];
        return endpoints;
    }

    async aweme(link) {
        return await this.fetchData(link, 'aweme');
    }

    async musicaldown(link) {
        return await this.fetchData(link, 'musicaldown');
    }

    async savetik(link) {
        return await this.fetchData(link, 'savetik');
    }

    async snaptik(link) {
        return await this.fetchData(link, 'snaptik');
    }

    async snaptikpro(link) {
        return await this.fetchData(link, 'snaptikpro');
    }

    async ssstik(link) {
        return await this.fetchData(link, 'ssstik');
    }

    async tikcdn(link) {
        return await this.fetchData(link, 'tikcdn');
    }

    async tikmate(link) {
        return await this.fetchData(link, 'tikmate');
    }

    async tiktokdownloadr(link) {
        return await this.fetchData(link, 'tiktokdownloadr');
    }

    async tikwm(link) {
        return await this.fetchData(link, 'tikwm');
    }

    async ttdownloader(link) {
        return await this.fetchData(link, 'ttdownloader');
    }
}

export {
    TiktokJs
};
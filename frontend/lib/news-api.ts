export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  source: {
    name: string;
  };
}

export async function fetchBreastCancerNews(): Promise<NewsArticle[]> {
  const API_KEYS = [
    "4ca1680ee9f071396ae1e4c87c4586e2",
    "5adb9f6797adc7328323540b2556e363",
    "dMRWmqP80Rz1Vh6fGQxw6HB_urgvBL2FatiUj-mW8I8Y5z-7",
    "57e9d5cfb53f43728eddaeda2afc2ee3"
  ];
  const page = Math.floor(Math.random() * 5) + 1;
  const endpoint = (key: string) =>
    `https://newsapi.org/v2/everything?q=disease&sortBy=publishedAt&language=en&pageSize=3&page=${page}&apiKey=${key}`;

  try {
    // Fetch in parallel
    const fetches = API_KEYS.map(key =>
      fetch(endpoint(key), { cache: "no-store" })
        .then(res => res.ok ? res.json() : Promise.reject(res.status))
        .then(data => data.articles || [])
        .catch(() => [])
    );
    const results = await Promise.all(fetches);
    // Flatten, dedupe
    const allArticles = results.flat();
    // Remove duplicates by URL
    const seen = new Set();
    const deduped = allArticles.filter((a: any) => {
      if (!a.url || seen.has(a.url)) return false;
      seen.add(a.url);
      return true;
    });
    // Shuffle
    for (let i = deduped.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deduped[i], deduped[j]] = [deduped[j], deduped[i]];
    }
    // Map to NewsArticle and return up to 6
    return deduped.slice(0, 6).map((article: any, index: number) => ({
      id: index.toString() + '-' + (article.url || ''),
      title: article.title,
      description: article.description,
      url: article.url,
      publishedAt: article.publishedAt ? article.publishedAt.split('T')[0] : '',
      source: { name: article.source?.name || "Unknown" }
    }));
  } catch (error) {
    console.error('Error fetching news:', error);
    throw new Error('Failed to fetch news data');
  }
}

// Function to format date for display
export function formatNewsDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 1) {
    return 'Yesterday';
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    });
  }
} 
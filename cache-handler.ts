const cache = new Map();

class CacheHandler {
  constructor(options: any) {
    this.options = options;
  }

  async get(key: any) {
    // This could be stored anywhere, like durable storage
    return cache.get(key);
  }

  async set(key: any, data: any, ctx: any) {
    // This could be stored anywhere, like durable storage
    cache.set(key, {
      value: data,
      lastModified: Date.now(),
      tags: ctx.tags,
    });
  }

  async revalidateTag(tag: any) {
    // Iterate over all entries in the cache
    for (let [key, value] of cache) {
      // If the value's tags include the specified tag, delete this entry
      if (value.tags.includes(tag)) {
        cache.delete(key);
      }
    }
  }
}

module.exports = CacheHandler;
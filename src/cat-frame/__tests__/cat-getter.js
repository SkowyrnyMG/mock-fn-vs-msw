import { CatGetter } from '../cat-getter';

describe('Cat getter mock', () => {
  test('should run once', async () => {
    
    const result = await CatGetter();
    console.log(result)
    
    expect(result).toBe('https://cdn2.thecatapi.com/images/4iu.gif');

    // expect(axiosMock.get).toHaveBeenCalledTimes(1); 
    // expect(axiosMock.get).toHaveBeenCalledWith("https://api.thecatapi.com/v1/images/search", {"params": {"limit": 1, "size": "full"}});
    // expect(await result).toBe("returned-url-from-database");
  });
});
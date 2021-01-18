import { CatGetter } from '../cat-getter';
import axiosMock from 'axios';


describe('Cat getter mock', () => {
  test('should run once', async () => {
    axiosMock.get.mockImplementationOnce(() => Promise.resolve({
      data: [{
        url: "returned-url-from-database"
      }]
    }))
    const result = await CatGetter();

    expect(axiosMock.get).toHaveBeenCalledTimes(1); 
    expect(axiosMock.get).toHaveBeenCalledWith("https://api.thecatapi.com/v1/images/search", {"params": {"limit": 1, "size": "full"}});
    expect(await result).toBe("returned-url-from-database");
  });
});
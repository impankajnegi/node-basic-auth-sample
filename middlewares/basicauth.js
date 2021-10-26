/**
 * This Middleware checks for an authorization header
 * if it found on than it will consider it as a valid request 
 * otherwise it will send 401 alone with WWW-Authenticate header
 * so user will be prompted for credentials
 * @param {Request} req 
 * @param {Response} res 
 * @param {import("express").RequestHandler} next 
 * @returns 
 */

const basicAuth = (req, res, next)=>{
    console.log("Performing Authentication..");
    console.log(req.headers)

    //Browser request sample
   const sample_header =  {
        host: 'localhost:3000',
        connection: 'keep-alive',
        'cache-control': 'max-age=0',
        'sec-ch-ua': '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36',
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'sec-fetch-site': 'none',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-user': '?1',
        'sec-fetch-dest': 'document',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9,hi;q=0.8',
        'if-none-match': 'W/"11-rZ/1hb3szopgnCmN4daWt+PHSeE"'
      }

      //Postman request sample
      const sample_basic_auth_header = {
        authorization: 'Basic YWRtaW46cGFzcw==',
        'user-agent': 'PostmanRuntime/7.26.8',
        accept: '*/*',
        'postman-token': '93a4f66d-f165-4a71-8fed-d8967def4224',
        host: 'localhost:3000',
        'accept-encoding': 'gzip, deflate, br',
        connection: 'keep-alive'
      }


      if(!req.headers.authorization){
        res.setHeader('WWW-Authenticate', 'Basic realm="Node"') 
        return res.status(401).send('Credentials missing')
      } 
      next()

      
}

module.exports.basicAuth = basicAuth;
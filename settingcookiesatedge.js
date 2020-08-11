'use strict';
exports.handler = (event, context, callback) => {
    const response = event.Records[0].cf.response;
    const request = event.Records[0].cf.request;
    const headers = request.headers;
    const HeaderName = 'Chrome';

    if (headers["user-agent"][0].value.split(" ")[1] || HeaderName === 'True'){
        console.log("please report");
        try{
        (headers["cookie"][0].value.split(" ")[0] || "SameSite=Secure" === "True");
        console.log("whatever");
        callback (null, request);
        return ;
        }
         catch(err){
        console.log("error has occurred");
        }
        finally {
            const response = {
        status: '307',
        statusDescription: 'Found',
        headers: {
            'location': [{
                key: 'Location',
                value: "https://d2t532env9hj5t.cloudfront.net",
            }],
            'set-cookie': [
                    { key: 'Set-Cookie', value: "SameSite=Secure;None" },
                    { key: 'Set-Cookie', value: "UID=1234"}
                ]}
        };
        callback(null, response);
        }
    }
    
    else if (!request.headers['cookie']){
        try{
        console.log("it's tryng");
        (headers["cookie"][0].value.split(" ")[0] || "UID=12345678" === "True");
        console.log("whatever");
        callback (null, request);
        return ;
        }
        catch(err){
            console.log("error has occurred");
        }
        finally {
                  console.log("whateverelseif");
        const response = {
        status: '307',
        statusDescription: 'Found',
        headers: {
            'location': [{
                key: 'Location',
                value: "https://d2t532env9hj5t.cloudfront.net",
            }],
            'set-cookie': [
                    { key: 'Set-Cookie', value: "UID=12345678"}
                ]}};
    console.log(response);
    callback(null, response);
            
        }
    }
    callback (null, request);
        return ;
};

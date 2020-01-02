import { AzureFunction, Context, HttpRequest, Response } from '@azure/functions'

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<Response> {
    context.log('HTTP trigger function processed a request.');
    const name = (req.query.name);

    const output: Response = {
      res: { status: 400, body: { message: 'invalid request' } }
    }

    if (name) {
        output.res = {
            status: 200,
            body: { message: "Hello " + (req.query.name) }
        };
    }
    return output
};

export default httpTrigger;

import { environment } from './environments/environment';
// export const domainName = environment.production?'https://api.tusoapp.com':'https://api.dev.tusoapp.com';
const domainName="https://b.daoapp.io";
export const blog = {
    tags:domainName+'/api/v1/tags/list',    
    articles:domainName+'/api/v1/articles/list',
    view:domainName+'/api/v1/articles/view',
}

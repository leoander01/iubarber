import IParseMailTemplateDTO from '../dtos/IParseTemplateDTO';

export default interface IMailTemplateProvider {
    parse(data: IParseMailTemplateDTO): Promise<string>;
}
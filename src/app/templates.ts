export interface Templates {
    Id:string;
    templateName:string;
    templateDescription:string;
    state:string;
}
export interface TemplateDetails {
    draft?: TemplateVersionDetails;
    published?: TemplateVersionDetails;
    rootVersionId: string;
    totalProjectCount: number;
}

export interface TemplateVersionDetails {
    description: string;
    hasParents: boolean;
    icon: string;
    id: string;
    isActive: boolean;
    isLocked: boolean;
    name: string;
    nextTemplateId: string;
    rootVersionId: string;
    status: string;
    totalProjectCount: number;
    version: number;
    versionProjectCount: number;
}

import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface PublicProjectView {
    reraApprovalDetails: string;
    city: string;
    state: string;
    address: string;
    details: string;
    specialtyFeatures: string;
    pincode: string;
    priceBreakdown: string;
    location: string;
    connectivityFeatures: string;
}
export interface Project {
    reraApprovalDetails: string;
    city: string;
    state: string;
    address: string;
    details: string;
    specialtyFeatures: string;
    pincode: string;
    priceBreakdown: string;
    location: string;
    connectivityFeatures: string;
}
export interface Inquiry {
    contact: string;
    name: string;
    email: string;
    plotNumber: string;
    message: string;
}
export interface backendInterface {
    createProject(userId: string, projectData: Project): Promise<void>;
    deleteProject(userId: string): Promise<void>;
    getAllInquiries(userId: string): Promise<Array<Inquiry>>;
    getProject(): Promise<PublicProjectView | null>;
    getProjectsByCity(city: string): Promise<Array<Project>>;
    getProjectsByPincode(pincode: string): Promise<Array<Project>>;
    submitInquiry(name: string, contact: string, email: string, message: string, plotNumber: string): Promise<void>;
    updateProject(userId: string, projectData: Project): Promise<void>;
}


/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Role {
    ACCOUNTS = "ACCOUNTS",
    ADMIN = "ADMIN",
    ANIMALHUSBANDRY = "ANIMALHUSBANDRY",
    DOCTOR = "DOCTOR",
    DYCOLL = "DYCOLL",
    FARMER = "FARMER",
    SCSCT = "SCSCT",
    STOCKMEN = "STOCKMEN",
    SYSTEM = "SYSTEM"
}

export enum SEX {
    FEMALE = "FEMALE",
    MALE = "MALE"
}

export enum Status {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    NONE = "NONE"
}

export interface CreateBirthInput {
    exampleField: number;
}

export interface CreateBreedInput {
    exampleField: number;
}

export interface CreateLearnInput {
    exampleField: number;
}

export interface CreateLoanInput {
    exampleField: number;
}

export interface CreateMarketInput {
    exampleField: number;
}

export interface CreateMedicalInput {
    exampleField: number;
}

export interface LoginUserInput {
    mobile: string;
    password: string;
}

export interface SignUpUserInput {
    mobile: string;
    name: string;
    password: string;
}

export interface UpdateBirthInput {
    exampleField?: Nullable<number>;
    id: number;
}

export interface UpdateBreedInput {
    exampleField?: Nullable<number>;
    id: number;
}

export interface UpdateLearnInput {
    exampleField?: Nullable<number>;
    id: number;
}

export interface UpdateLoanInput {
    exampleField?: Nullable<number>;
    id: number;
}

export interface UpdateMarketInput {
    exampleField?: Nullable<number>;
    id: number;
}

export interface UpdateMedicalInput {
    exampleField?: Nullable<number>;
    id: number;
}

export interface Birth {
    exampleField: number;
}

export interface Breed {
    createdAt: DateTime;
    deletedAt?: Nullable<DateTime>;
    description: string;
    id: number;
    name: string;
    updatedAt: DateTime;
}

export interface Cow {
    alias: string;
    birthdate: DateTime;
    breed: Breed;
    breedid: number;
    cowname: string;
    cowtagno: string;
    createdAt: DateTime;
    createdById: number;
    daily_milk_produce: string;
    deletedAt?: Nullable<DateTime>;
    deletedById?: Nullable<number>;
    farmerid: number;
    heat_period: string;
    id: number;
    last_calf_birthdate: DateTime;
    last_deworming_date: DateTime;
    last_treatment_date: DateTime;
    last_vaccine_date: DateTime;
    noofcalves: number;
    photo1: string;
    photo2: string;
    photo3: string;
    photo4: string;
    photocover: string;
    remarks: string;
    sex: SEX;
    status: Status;
    updatedAt: DateTime;
    updatedById: number;
    weight: string;
}

export interface Learn {
    exampleField: number;
}

export interface Loan {
    exampleField: number;
}

export interface Market {
    exampleField: number;
}

export interface Medical {
    exampleField: number;
}

export interface IMutation {
    createBirth(createBirthInput: CreateBirthInput): Birth | Promise<Birth>;
    createBreed(createBreedInput: CreateBreedInput): Breed | Promise<Breed>;
    createLearn(createLearnInput: CreateLearnInput): Learn | Promise<Learn>;
    createLoan(createLoanInput: CreateLoanInput): Loan | Promise<Loan>;
    createMarket(createMarketInput: CreateMarketInput): Market | Promise<Market>;
    createMedical(createMedicalInput: CreateMedicalInput): Medical | Promise<Medical>;
    removeBirth(id: number): Birth | Promise<Birth>;
    removeBreed(id: number): Breed | Promise<Breed>;
    removeLearn(id: number): Learn | Promise<Learn>;
    removeLoan(id: number): Loan | Promise<Loan>;
    removeMarket(id: number): Market | Promise<Market>;
    removeMedical(id: number): Medical | Promise<Medical>;
    signup(signUpUserInput: SignUpUserInput): User | Promise<User>;
    updateBirth(updateBirthInput: UpdateBirthInput): Birth | Promise<Birth>;
    updateBreed(updateBreedInput: UpdateBreedInput): Breed | Promise<Breed>;
    updateLearn(updateLearnInput: UpdateLearnInput): Learn | Promise<Learn>;
    updateLoan(updateLoanInput: UpdateLoanInput): Loan | Promise<Loan>;
    updateMarket(updateMarketInput: UpdateMarketInput): Market | Promise<Market>;
    updateMedical(updateMedicalInput: UpdateMedicalInput): Medical | Promise<Medical>;
}

export interface IQuery {
    birth(id: number): Birth | Promise<Birth>;
    breed(id: number): Breed | Promise<Breed>;
    getCowById(id: number): Cow | Promise<Cow>;
    getUserById(id: number): User | Promise<User>;
    getUserCows(id: number): Cow[] | Promise<Cow[]>;
    learn(id: number): Learn | Promise<Learn>;
    loan(id: number): Loan | Promise<Loan>;
    login(loginUserInput: LoginUserInput): User | Promise<User>;
    market(id: number): Market | Promise<Market>;
    medical(id: number): Medical | Promise<Medical>;
    mobileLogin(mobile: string): User | Promise<User>;
}

export interface User {
    address?: Nullable<string>;
    alias?: Nullable<string>;
    beneficiary_code?: Nullable<string>;
    contact: string;
    contact_two?: Nullable<string>;
    createdAt: DateTime;
    deletedAt?: Nullable<DateTime>;
    district?: Nullable<string>;
    id: number;
    name: string;
    password?: Nullable<string>;
    photo?: Nullable<string>;
    remark?: Nullable<string>;
    role: Role;
    status: Status;
    updatedAt: DateTime;
    village?: Nullable<string>;
}

export type DateTime = any;
type Nullable<T> = T | null;

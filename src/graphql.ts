
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Category {
    GENERAL = "GENERAL",
    OBC = "OBC",
    OTHERS = "OTHERS",
    SCST = "SCST"
}

export enum Learn {
    FOOD = "FOOD",
    HEALTH = "HEALTH",
    MEDICINE = "MEDICINE"
}

export enum RequestType {
    FOLLOWUP = "FOLLOWUP",
    MEDICAL = "MEDICAL",
    SELFASSESSED = "SELFASSESSED"
}

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

export interface CreateCowInput {
    alias: string;
    birthdate: DateTime;
    breedid: number;
    cowname: string;
    cowtagno: string;
    daily_milk_produce?: Nullable<string>;
    farmerid: number;
    noofcalves: number;
    photo1?: Nullable<string>;
    photo2?: Nullable<string>;
    photo3?: Nullable<string>;
    photo4?: Nullable<string>;
    photocover: string;
    purchased_contact?: Nullable<string>;
    purchased_date?: Nullable<DateTime>;
    purchased_from?: Nullable<string>;
    purchased_price?: Nullable<string>;
    remarks?: Nullable<string>;
    sex: SEX;
    status: Status;
    weight: string;
}

export interface CreateFeedbackInput {
    createdById: number;
    description: string;
    happy: boolean;
    status: Status;
    suggestion: string;
}

export interface CreateHealthreportInput {
    black_quarter_date?: Nullable<DateTime>;
    brucellossis_date?: Nullable<DateTime>;
    cowid: number;
    createdById: number;
    food_and_mouth_date?: Nullable<DateTime>;
    heat_period?: Nullable<DateTime>;
    hemorrhagic_septicemia_date?: Nullable<DateTime>;
    last_calf_birthdate?: Nullable<DateTime>;
    last_deworming_date?: Nullable<DateTime>;
    last_sickness_date?: Nullable<DateTime>;
    last_treatment_date?: Nullable<DateTime>;
    last_vaccine_date?: Nullable<DateTime>;
}

export interface CreateMarketInput {
    cowid: number;
    farmerid: number;
    price: string;
    remarks: string;
    status: Status;
    verified: boolean;
}

export interface CreateMedicalInput {
    cowid: number;
    farmerid: number;
    reason: string;
}

export interface CreateVaccinationInput {
    exampleField: number;
}

export interface LoginUserInput {
    code: string;
    password: string;
}

export interface OtpInput {
    code: string;
    otp: string;
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
    cow_health_report: Healthreport[];
    cowname: string;
    cowtagno: string;
    createdAt: DateTime;
    createdById: number;
    daily_milk_produce?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
    deletedById?: Nullable<number>;
    farmerid: number;
    id: number;
    noofcalves?: Nullable<number>;
    photo1?: Nullable<string>;
    photo2?: Nullable<string>;
    photo3?: Nullable<string>;
    photo4?: Nullable<string>;
    photocover: string;
    purchased_contact?: Nullable<string>;
    purchased_date?: Nullable<DateTime>;
    purchased_from?: Nullable<string>;
    purchased_price?: Nullable<string>;
    remarks?: Nullable<string>;
    sex: SEX;
    status: Status;
    updatedAt: DateTime;
    updatedById: number;
    weight: string;
}

export interface Feedback {
    createdAt: DateTime;
    createdById: number;
    deletedAt?: Nullable<DateTime>;
    deletedById?: Nullable<number>;
    description: string;
    happy: boolean;
    id: number;
    status: Status;
    suggestion: string;
    updatedAt: DateTime;
    updatedById: number;
}

export interface Food {
    cover: string;
    createdAt: DateTime;
    createdById: number;
    deletedAt?: Nullable<DateTime>;
    deletedById: number;
    description: string;
    id: number;
    name: string;
    price: string;
    purpose: string;
    size: string;
    status: Status;
    updatedAt: DateTime;
    updatedById?: Nullable<number>;
}

export interface Healthreport {
    black_quarter_date?: Nullable<DateTime>;
    brucellossis_date?: Nullable<DateTime>;
    cow?: Nullable<Cow>;
    cowid: number;
    food_and_mouth_date?: Nullable<DateTime>;
    heat_period?: Nullable<DateTime>;
    hemorrhagic_septicemia_date?: Nullable<DateTime>;
    id: number;
    last_calf_birthdate?: Nullable<DateTime>;
    last_deworming_date?: Nullable<DateTime>;
    last_sickness_date?: Nullable<DateTime>;
    last_treatment_date?: Nullable<DateTime>;
    last_vaccine_date?: Nullable<DateTime>;
}

export interface LearnData {
    cover: string;
    createdAt: DateTime;
    deletedAt?: Nullable<DateTime>;
    description: string;
    id: number;
    link: string;
    title: string;
    type: Learn;
    updatedAt: DateTime;
}

export interface Loan {
    amount: string;
    cow?: Nullable<Cow>;
    cowid: number;
    createdAt: DateTime;
    deletedAt?: Nullable<DateTime>;
    emi_amount: string;
    emi_date: DateTime;
    end_date: DateTime;
    farmer?: Nullable<User>;
    farmerid: number;
    id: number;
    loan_id: string;
    remark: string;
    start_date: DateTime;
    status: Status;
    updatedAt: DateTime;
}

export interface Market {
    cow?: Nullable<Cow>;
    cowid: number;
    createdAt: DateTime;
    createdById: number;
    deletedAt?: Nullable<DateTime>;
    deletedById: number;
    farmer?: Nullable<User>;
    farmerid: number;
    id: number;
    listingdate: DateTime;
    price: string;
    remarks: string;
    status: Status;
    updatedAt: DateTime;
    updatedById?: Nullable<number>;
    verified: boolean;
}

export interface Medical {
    cow?: Nullable<Cow>;
    cowid: number;
    createdAt: DateTime;
    createdById: number;
    date: DateTime;
    deletedAt?: Nullable<DateTime>;
    deletedById: number;
    doctor?: Nullable<User>;
    doctorid?: Nullable<number>;
    farmer?: Nullable<User>;
    farmerid: number;
    follow_up_date: DateTime;
    follow_up_treatment: string;
    id: number;
    reason: string;
    remarks: string;
    status: Status;
    treatment_provided: string;
    type: RequestType;
    updatedAt: DateTime;
    updatedById?: Nullable<number>;
}

export interface Medicine {
    cover: string;
    createdAt: DateTime;
    createdById: number;
    deletedAt?: Nullable<DateTime>;
    deletedById: number;
    description: string;
    id: number;
    name: string;
    price: string;
    purpose: string;
    size: string;
    status: Status;
    updatedAt: DateTime;
    updatedById?: Nullable<number>;
}

export interface IMutation {
    addMarketCow(createMarketInput: CreateMarketInput): Market | Promise<Market>;
    createBirth(createBirthInput: CreateBirthInput): Birth | Promise<Birth>;
    createBreed(createBreedInput: CreateBreedInput): Breed | Promise<Breed>;
    createCow(createCowInput: CreateCowInput): Cow | Promise<Cow>;
    createFeedback(createFeedbackInput: CreateFeedbackInput): Feedback | Promise<Feedback>;
    createHealthreport(createHealthreportInput: CreateHealthreportInput): Healthreport | Promise<Healthreport>;
    createMedical(createMedicalInput: CreateMedicalInput): Medical | Promise<Medical>;
    createVaccination(createVaccinationInput: CreateVaccinationInput): Vaccination | Promise<Vaccination>;
    removeBirth(id: number): Birth | Promise<Birth>;
    removeBreed(id: number): Breed | Promise<Breed>;
    sendOtp(code: string): User | Promise<User>;
    signup(signUpUserInput: SignUpUserInput): User | Promise<User>;
    updateBirth(updateBirthInput: UpdateBirthInput): Birth | Promise<Birth>;
    updateBreed(updateBreedInput: UpdateBreedInput): Breed | Promise<Breed>;
    verifyOtp(otpInput: OtpInput): User | Promise<User>;
}

export interface IQuery {
    birth(id: number): Birth | Promise<Birth>;
    breed(id: number): Breed | Promise<Breed>;
    codeLogin(code: string): User | Promise<User>;
    getAllLearn(): LearnData[] | Promise<LearnData[]>;
    getCowById(id: number): Cow | Promise<Cow>;
    getFarmerByCode(code: string): User | Promise<User>;
    getMarketCow(): Market[] | Promise<Market[]>;
    getMarketFood(): Food[] | Promise<Food[]>;
    getMarketMedicine(): Medicine[] | Promise<Medicine[]>;
    getUserById(id: number): User | Promise<User>;
    getUserCows(id: number): Cow[] | Promise<Cow[]>;
    getUserCurrentLoan(id: number): Loan | Promise<Loan>;
    login(loginUserInput: LoginUserInput): User | Promise<User>;
}

export interface User {
    address?: Nullable<string>;
    alias?: Nullable<string>;
    beneficiary_code?: Nullable<string>;
    category: Category;
    contact: string;
    contact_two?: Nullable<string>;
    createdAt: DateTime;
    deletedAt?: Nullable<DateTime>;
    district?: Nullable<string>;
    id: number;
    name: string;
    occupation?: Nullable<string>;
    password?: Nullable<string>;
    photo?: Nullable<string>;
    remark?: Nullable<string>;
    role: Role;
    status: Status;
    updatedAt: DateTime;
    village?: Nullable<string>;
}

export interface Vaccination {
    alias: string;
    birthdate: DateTime;
    breed: Breed;
    breedid: number;
    cowname: string;
    cowtagno: string;
    createdAt: DateTime;
    createdById: number;
    daily_milk_produce?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
    deletedById?: Nullable<number>;
    farmerid: number;
    heat_period?: Nullable<string>;
    id: number;
    last_calf_birthdate?: Nullable<DateTime>;
    last_deworming_date?: Nullable<DateTime>;
    last_treatment_date?: Nullable<DateTime>;
    last_vaccine_date?: Nullable<DateTime>;
    noofcalves?: Nullable<number>;
    photo1?: Nullable<string>;
    photo2?: Nullable<string>;
    photo3?: Nullable<string>;
    photo4?: Nullable<string>;
    photocover: string;
    purchased_contact?: Nullable<string>;
    purchased_date?: Nullable<DateTime>;
    purchased_from?: Nullable<string>;
    purchased_price?: Nullable<string>;
    remarks?: Nullable<string>;
    sex: SEX;
    status: Status;
    updatedAt: DateTime;
    updatedById: number;
    weight: string;
}

export type DateTime = any;
type Nullable<T> = T | null;

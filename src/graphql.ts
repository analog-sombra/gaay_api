
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum BeneficiaryType {
    IDDP = "IDDP",
    SSDU = "SSDU"
}

export enum Category {
    GENERAL = "GENERAL",
    OBC = "OBC",
    OTHERS = "OTHERS",
    SCST = "SCST"
}

export enum CowStatus {
    ALIVE = "ALIVE",
    DEAD = "DEAD",
    SOLD = "SOLD"
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
    SELLERCOW = "SELLERCOW",
    SELLERFODDER = "SELLERFODDER",
    SELLERMEDICINE = "SELLERMEDICINE",
    STOCKMEN = "STOCKMEN",
    SYSTEM = "SYSTEM"
}

export enum SEX {
    FEMALE = "FEMALE",
    MALE = "MALE"
}

export enum SizeUnit {
    GRAM = "GRAM",
    KG = "KG",
    LITRE = "LITRE",
    ML = "ML",
    PIECE = "PIECE"
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

export interface CreateCowCalfInput {
    alias: string;
    birthdate: DateTime;
    black_quarter_date?: Nullable<DateTime>;
    breedid: number;
    brucellossis_date?: Nullable<DateTime>;
    cowid: number;
    cowname: string;
    cowstatus: CowStatus;
    cowtagno: string;
    createdById: number;
    daily_milk_produce?: Nullable<string>;
    death_date?: Nullable<DateTime>;
    farmerid: number;
    fathercowid: string;
    food_and_mouth_date?: Nullable<DateTime>;
    heat_period?: Nullable<DateTime>;
    hemorrhagic_septicemia_date?: Nullable<DateTime>;
    insurance_amount?: Nullable<string>;
    insurance_date?: Nullable<DateTime>;
    insurance_id?: Nullable<string>;
    insurance_name?: Nullable<string>;
    insurance_renewal_amount?: Nullable<string>;
    insurance_renewal_date?: Nullable<DateTime>;
    insurance_type?: Nullable<string>;
    last_calf_birthdate?: Nullable<DateTime>;
    last_deworming_date?: Nullable<DateTime>;
    last_sickness_date?: Nullable<DateTime>;
    last_treatment_date?: Nullable<DateTime>;
    last_vaccine_date?: Nullable<DateTime>;
    noofcalves: number;
    photo1?: Nullable<string>;
    photo2?: Nullable<string>;
    photo3?: Nullable<string>;
    photo4?: Nullable<string>;
    photocover: string;
    premium_amount?: Nullable<string>;
    purchased_contact?: Nullable<string>;
    purchased_date?: Nullable<DateTime>;
    purchased_from?: Nullable<string>;
    purchased_price?: Nullable<string>;
    remarks?: Nullable<string>;
    sex: SEX;
    sold_contact?: Nullable<string>;
    sold_date?: Nullable<DateTime>;
    sold_price?: Nullable<string>;
    sold_to?: Nullable<string>;
    status: Status;
    weight: string;
}

export interface CreateCowInput {
    alias: string;
    birthdate: DateTime;
    black_quarter_date?: Nullable<DateTime>;
    breedid: number;
    brucellossis_date?: Nullable<DateTime>;
    cowname: string;
    cowstatus: CowStatus;
    cowtagno: string;
    createdById: number;
    daily_milk_produce?: Nullable<string>;
    death_date?: Nullable<DateTime>;
    farmerid: number;
    food_and_mouth_date?: Nullable<DateTime>;
    heat_period?: Nullable<DateTime>;
    hemorrhagic_septicemia_date?: Nullable<DateTime>;
    insurance_amount?: Nullable<string>;
    insurance_date?: Nullable<DateTime>;
    insurance_id?: Nullable<string>;
    insurance_name?: Nullable<string>;
    insurance_renewal_amount?: Nullable<string>;
    insurance_renewal_date?: Nullable<DateTime>;
    insurance_type?: Nullable<string>;
    last_calf_birthdate?: Nullable<DateTime>;
    last_deworming_date?: Nullable<DateTime>;
    last_sickness_date?: Nullable<DateTime>;
    last_treatment_date?: Nullable<DateTime>;
    last_vaccine_date?: Nullable<DateTime>;
    noofcalves: number;
    photo1?: Nullable<string>;
    photo2?: Nullable<string>;
    photo3?: Nullable<string>;
    photo4?: Nullable<string>;
    photocover: string;
    premium_amount?: Nullable<string>;
    purchased_contact?: Nullable<string>;
    purchased_date?: Nullable<DateTime>;
    purchased_from?: Nullable<string>;
    purchased_price?: Nullable<string>;
    remarks?: Nullable<string>;
    sex: SEX;
    sold_contact?: Nullable<string>;
    sold_date?: Nullable<DateTime>;
    sold_price?: Nullable<string>;
    sold_to?: Nullable<string>;
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

export interface CreateFoodInput {
    composition?: Nullable<string>;
    cover: string;
    createdById: number;
    description: string;
    large_description?: Nullable<string>;
    manufacturer?: Nullable<string>;
    mrp: string;
    name: string;
    pack_size?: Nullable<string>;
    photo1?: Nullable<string>;
    photo2?: Nullable<string>;
    photo3?: Nullable<string>;
    photo4?: Nullable<string>;
    photo5?: Nullable<string>;
    purchase_price: string;
    purpose: string;
    sale_price?: Nullable<string>;
    size: string;
    size_unit: SizeUnit;
    status: Status;
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

export interface CreateMedicineInput {
    composition?: Nullable<string>;
    cover: string;
    createdById: number;
    description: string;
    dosage?: Nullable<string>;
    large_description?: Nullable<string>;
    manufacturer?: Nullable<string>;
    mrp: string;
    name: string;
    pack_size?: Nullable<string>;
    photo1?: Nullable<string>;
    photo2?: Nullable<string>;
    photo3?: Nullable<string>;
    photo4?: Nullable<string>;
    photo5?: Nullable<string>;
    purchase_price: string;
    purpose: string;
    sale_price?: Nullable<string>;
    size: string;
    size_unit: SizeUnit;
    status: Status;
}

export interface CreateUserInput {
    beneficiary_code: string;
    beneficiary_type: BeneficiaryType;
    contact: string;
    cow_count: number;
    name: string;
    role: Role;
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

export interface SearchCowPaginationInput {
    search?: Nullable<string>;
    skip: number;
    take: number;
}

export interface SearchLearnPaginationInput {
    learn?: Nullable<Learn>;
    search?: Nullable<string>;
    skip: number;
    take: number;
}

export interface SearchMedicalPaginationInput {
    search?: Nullable<string>;
    skip: number;
    take: number;
}

export interface SearchUserPaginationInput {
    roles?: Nullable<Role[]>;
    search?: Nullable<string>;
    skip: number;
    take: number;
}

export interface SignInUserInput {
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

export interface UpdateCowInput {
    alias: string;
    birthdate: DateTime;
    black_quarter_date?: Nullable<DateTime>;
    breedid: number;
    brucellossis_date?: Nullable<DateTime>;
    cowname: string;
    cowstatus: CowStatus;
    cowtagno: string;
    createdById?: Nullable<number>;
    daily_milk_produce?: Nullable<string>;
    death_date?: Nullable<DateTime>;
    farmerid: number;
    food_and_mouth_date?: Nullable<DateTime>;
    heat_period?: Nullable<DateTime>;
    hemorrhagic_septicemia_date?: Nullable<DateTime>;
    id: number;
    insurance_amount?: Nullable<string>;
    insurance_date?: Nullable<DateTime>;
    insurance_id?: Nullable<string>;
    insurance_name?: Nullable<string>;
    insurance_renewal_amount?: Nullable<string>;
    insurance_renewal_date?: Nullable<DateTime>;
    insurance_type?: Nullable<string>;
    last_calf_birthdate?: Nullable<DateTime>;
    last_deworming_date?: Nullable<DateTime>;
    last_sickness_date?: Nullable<DateTime>;
    last_treatment_date?: Nullable<DateTime>;
    last_vaccine_date?: Nullable<DateTime>;
    noofcalves: number;
    photo1?: Nullable<string>;
    photo2?: Nullable<string>;
    photo3?: Nullable<string>;
    photo4?: Nullable<string>;
    photocover: string;
    premium_amount?: Nullable<string>;
    purchased_contact?: Nullable<string>;
    purchased_date?: Nullable<DateTime>;
    purchased_from?: Nullable<string>;
    purchased_price?: Nullable<string>;
    remarks?: Nullable<string>;
    sex: SEX;
    sold_contact?: Nullable<string>;
    sold_date?: Nullable<DateTime>;
    sold_price?: Nullable<string>;
    sold_to?: Nullable<string>;
    status: Status;
    updatedById: number;
    weight: string;
}

export interface Birth {
    calfid: number;
    createdAt: DateTime;
    createdById: number;
    deletedAt?: Nullable<DateTime>;
    deletedById?: Nullable<number>;
    fathercowid?: Nullable<string>;
    id: number;
    mothercowid: number;
    remarks: string;
    status: Status;
    updatedAt: DateTime;
    updatedById: number;
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
    calf_birth: Birth[];
    cow_health_report: Healthreport[];
    cowname: string;
    cowstatus: CowStatus;
    cowtagno: string;
    createdAt: DateTime;
    createdById: number;
    daily_milk_produce?: Nullable<string>;
    death_date?: Nullable<DateTime>;
    death_reason?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
    deletedById?: Nullable<number>;
    farmer: User;
    farmerid: number;
    id: number;
    insurance: Insurance[];
    mothercow_birth: Birth[];
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
    sold_contact?: Nullable<string>;
    sold_date?: Nullable<DateTime>;
    sold_price?: Nullable<string>;
    sold_to?: Nullable<string>;
    status: Status;
    updatedAt: DateTime;
    updatedById: number;
    weight: string;
}

export interface CowPagination {
    data: Cow[];
    skip: number;
    take: number;
    total: number;
}

export interface DashboardData {
    cows: number;
    medical: number;
    user: number;
    venders: number;
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
    composition?: Nullable<string>;
    cover: string;
    createdAt: DateTime;
    createdById: number;
    deletedAt?: Nullable<DateTime>;
    deletedById: number;
    description: string;
    id: number;
    large_description?: Nullable<string>;
    manufacturer?: Nullable<string>;
    mrp: string;
    name: string;
    pack_size?: Nullable<string>;
    photo1?: Nullable<string>;
    photo2?: Nullable<string>;
    photo3?: Nullable<string>;
    photo4?: Nullable<string>;
    photo5?: Nullable<string>;
    purchase_price: string;
    purpose: string;
    sale_price?: Nullable<string>;
    size: string;
    size_unit: SizeUnit;
    status: Status;
    updatedAt: DateTime;
    updatedById?: Nullable<number>;
}

export interface FoodPagination {
    data: Food[];
    skip: number;
    take: number;
    total: number;
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

export interface Insurance {
    cowid: number;
    createdAt: DateTime;
    createdById: number;
    deletedAt?: Nullable<DateTime>;
    deletedById?: Nullable<number>;
    id: number;
    insurance_amount?: Nullable<string>;
    insurance_date?: Nullable<DateTime>;
    insurance_id?: Nullable<string>;
    insurance_name?: Nullable<string>;
    insurance_renewal_amount?: Nullable<string>;
    insurance_renewal_date?: Nullable<DateTime>;
    insurance_type?: Nullable<string>;
    premium_amount?: Nullable<string>;
    status: Status;
    updatedAt: DateTime;
    updatedById: number;
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

export interface LearnPagination {
    data: LearnData[];
    skip: number;
    take: number;
    total: number;
}

export interface Loan {
    amount: string;
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

export interface MarketPagination {
    data: Market[];
    skip: number;
    take: number;
    total: number;
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
    follow_up_date?: Nullable<DateTime>;
    follow_up_treatment?: Nullable<string>;
    id: number;
    reason: string;
    remarks?: Nullable<string>;
    status: Status;
    treatment_provided?: Nullable<string>;
    type: RequestType;
    updatedAt: DateTime;
    updatedById?: Nullable<number>;
}

export interface MedicalPagination {
    data: Medical[];
    skip: number;
    take: number;
    total: number;
}

export interface Medicine {
    composition?: Nullable<string>;
    cover: string;
    createdAt: DateTime;
    createdById: number;
    deletedAt?: Nullable<DateTime>;
    deletedById: number;
    description: string;
    dosage?: Nullable<string>;
    id: number;
    large_description?: Nullable<string>;
    manufacturer?: Nullable<string>;
    mrp: string;
    name: string;
    pack_size?: Nullable<string>;
    photo1?: Nullable<string>;
    photo2?: Nullable<string>;
    photo3?: Nullable<string>;
    photo4?: Nullable<string>;
    photo5?: Nullable<string>;
    purchase_price: string;
    purpose: string;
    sale_price?: Nullable<string>;
    size: string;
    size_unit: SizeUnit;
    status: Status;
    updatedAt: DateTime;
    updatedById?: Nullable<number>;
}

export interface MedicinePagination {
    data: Medicine[];
    skip: number;
    take: number;
    total: number;
}

export interface MonthData {
    count: number;
    month: string;
}

export interface IMutation {
    addMarketCow(createMarketInput: CreateMarketInput): Market | Promise<Market>;
    createBirth(createBirthInput: CreateBirthInput): Birth | Promise<Birth>;
    createBreed(createBreedInput: CreateBreedInput): Breed | Promise<Breed>;
    createCow(createCowInput: CreateCowInput): Cow | Promise<Cow>;
    createCowCalf(createCowCalfInput: CreateCowCalfInput): Cow | Promise<Cow>;
    createFeedback(createFeedbackInput: CreateFeedbackInput): Feedback | Promise<Feedback>;
    createHealthreport(createHealthreportInput: CreateHealthreportInput): Healthreport | Promise<Healthreport>;
    createMarketFood(createFoodInput: CreateFoodInput): Food | Promise<Food>;
    createMarketMedicine(createMedicineInput: CreateMedicineInput): Medicine | Promise<Medicine>;
    createMedical(createMedicalInput: CreateMedicalInput): Medical | Promise<Medical>;
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    createVaccination(createVaccinationInput: CreateVaccinationInput): Vaccination | Promise<Vaccination>;
    editUserPhoto(id: number, photo: string): User | Promise<User>;
    removeBirth(id: number): Birth | Promise<Birth>;
    removeBreed(id: number): Breed | Promise<Breed>;
    searchCows(searchCowPaginationInput: SearchCowPaginationInput): CowPagination | Promise<CowPagination>;
    searchLearn(searchLearnPaginationInput: SearchLearnPaginationInput): LearnPagination | Promise<LearnPagination>;
    searchMedicalRequest(searchMedicalPaginationInput: SearchMedicalPaginationInput): MedicalPagination | Promise<MedicalPagination>;
    searchUsers(searchUserPaginationInput: SearchUserPaginationInput): UserPagination | Promise<UserPagination>;
    sendOtp(code: string): User | Promise<User>;
    signup(signUpUserInput: SignUpUserInput): User | Promise<User>;
    updateBirth(updateBirthInput: UpdateBirthInput): Birth | Promise<Birth>;
    updateBreed(updateBreedInput: UpdateBreedInput): Breed | Promise<Breed>;
    updateCow(updateCowInput: UpdateCowInput): Cow | Promise<Cow>;
    verifyOtp(otpInput: OtpInput): User | Promise<User>;
}

export interface IQuery {
    birth(id: number): Birth | Promise<Birth>;
    breed(id: number): Breed | Promise<Breed>;
    codeLogin(code: string): User | Promise<User>;
    getAllLearn(): LearnData[] | Promise<LearnData[]>;
    getCowById(id: number): Cow | Promise<Cow>;
    getDashbordData(): DashboardData | Promise<DashboardData>;
    getFarmerByCode(code: string): User | Promise<User>;
    getMarketCow(): Market[] | Promise<Market[]>;
    getMarketCowByUser(id: number, skip: number, take: number): MarketPagination | Promise<MarketPagination>;
    getMarketFood(): Food[] | Promise<Food[]>;
    getMarketFoodByUser(id: number, skip: number, take: number): FoodPagination | Promise<FoodPagination>;
    getMarketMedicine(): Medicine[] | Promise<Medicine[]>;
    getMarketMedicineByUser(id: number, skip: number, take: number): MedicinePagination | Promise<MedicinePagination>;
    getMedicalRequestById(id: number): Medical | Promise<Medical>;
    getUserById(id: number): User | Promise<User>;
    getUserCows(id: number): Cow[] | Promise<Cow[]>;
    getUserCurrentLoan(id: number): Loan | Promise<Loan>;
    login(loginUserInput: LoginUserInput): User | Promise<User>;
    signIn(signInUserInput: SignInUserInput): User | Promise<User>;
    treatmentGraph(year: string): TreatmentData | Promise<TreatmentData>;
}

export interface TreatmentData {
    monthlyData: MonthData[];
}

export interface User {
    address?: Nullable<string>;
    alias?: Nullable<string>;
    beneficiary_code?: Nullable<string>;
    beneficiary_type?: Nullable<BeneficiaryType>;
    category: Category;
    contact: string;
    contact_two?: Nullable<string>;
    cow_count?: Nullable<number>;
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

export interface UserPagination {
    data: User[];
    skip: number;
    take: number;
    total: number;
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

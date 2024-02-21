export interface routeComponent {
    route: string;
    name: string;
    color: string;
    icon: string;
}

export interface alumno {
    name: string;
    matricula: string;
    email: string;
    password: string;
}

export interface Cars {
    model: string;
    price: number;
    photoUrl: string;
    color: string;
}

export interface Employee {
    name: string;
    lastname: string;
    salary: number;
    email: string;
    isActive: boolean;
}
export class Product{
    constructor(
        public id: number,
        public nombre: string,
        public descripcion: string,
        public precio: number,
        public imagen: string,
        public categoria: string,
        public tallas: any,
        public colores: any,
        public disponible: boolean,
    ){}
}
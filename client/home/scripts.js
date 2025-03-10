import { useState } from 'react';
import { Button, Input, Card, CardContent } from '@/components/ui';

export default function FormularioConLogin() {
const [formData, setFormData] = useState({ nombre: '', email: '' });

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
};



return (
    <div className="flex flex-col items-center p-4">
    <Card className="w-full max-w-md p-4">
        <CardContent>
        <h2 className="text-xl font-bold mb-4">Formulario de Registro</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            <Input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            />
            <Input
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            value={formData.email}
            onChange={handleChange}
            required
            />
            <Button type="submit">Enviar</Button>
        </form>
        <div className="mt-4">
            <a href="https://accounts.google.com/ServiceLogin" className="text-blue-500 hover:underline">
            Iniciar sesión/Registrarse con Google
            </a>
        </div>
        </CardContent>
    </Card>
    </div>
);
}





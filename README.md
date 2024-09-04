# Practica de Styled-Component con React+Vite

Este proyecto es una aplicación de React configurada con Vite y utiliza Styled-Components para el estilizado de los componentes. Contiene ejemplos de botones, títulos y tarjetas estilizadas.

### Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- Node.js (versión 14 o superior)
- npm o yarn (el gestor de paquetes de Node)

## Preparación

1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
```

2. Instala las dependencias

```bash
npm install
```
3. Inicia el servidor de desarrollo

Para iniciar el servidor de desarrollo y ver la aplicación en el navegador:

```bash
npm run dev
```
Esto abrirá automáticamente la aplicación en http://localhost:5173

## Estructura del Proyecto

```bash
src/
├── components/
│   ├── Button.jsx       // Componente de botón estilizado
│   ├── Title.jsx        // Componente de título estilizado
│   └── Card.jsx         // Componente de tarjeta estilizada
├── App.jsx              // Componente principal de la aplicación
├── main.jsx             // Punto de entrada de la aplicación
└── index.css            // Estilos globales

```

### Componentes Incluidos
- Button: Un botón estilizado que cambia de apariencia basado en la prop $primary.
- Title: Un título (h1) estilizado que se usa en la aplicación.
- Card: Una tarjeta estilizada que incluye una imagen, un título, y una descripción.

### Personalización

Puedes modificar los componentes o agregar nuevos en la carpeta src/components. Usa Styled-Components para crear estilos CSS encapsulados en tus componentes de React.
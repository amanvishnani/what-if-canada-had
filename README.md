# What if Canada had... 🇨🇦

A collection of interactive prototypes and "policy-as-software" visualizations exploring modernized digital infrastructure for Canada. 

> [!IMPORTANT]
> This project is a conceptual sandbox. All data displayed is mocked locally to simulate a world where friction-less digital services are the standard.

## 🚀 The Vision

Canada often falls behind in digital infrastructure. This project, starting with **MapleSync**, visualizes a world where:
- Financial data is owned by the citizen, not the bank.
- Income verification is instant and paperless.
- Public services feel premium, accessible, and unified.

## 📦 Project Structure

The application is structured as a multi-portal platform using a top-level router:

- **Landing Page (`/`)**: High-fidelity entry point for exploring different "What if" scenarios.
- **Open Banking (`/open-banking`)**: 
  - **Financial Overview**: Aggregate accounts from all major Canadian banks.
  - **Smart Marketplace**: Personalized financial product recommendations based on real data.
  - **Maple AI Assistant**: A Gemini-powered advisor for financial decision-making.
  - **Consent Management**: Granular control over who sees your data.
- **ePayroll Hub (`/epayroll`)**: 
  - Conceptual sandbox for real-time income verification and seamless job transitions.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **AI**: [Google Generative AI SDK](https://github.com/google-gemini/generative-ai-js)

## 🏃 Local Development

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Environment Setup**:
    Create a `.env.local` file and add your Gemini API key:
    ```env
    VITE_GEMINI_API_KEY=your_api_key_here
    ```

3.  **Start development server**:
    ```bash
    npm run dev
    ```

## 🌙 Dark Mode

The project features a persistent Dark Mode. User preferences are saved to `localStorage` and synchronized across all portals and sub-routes for a seamless aesthetic experience.

---

*Part of the "Future-Proof Canada" initiative. Built with 🍁 for the next generation of Canadian digital services.*

import React, { ReactNode } from "react";

export interface IAuthContect {
    isAuthenticated: boolean,
    handleLogin: (token: string) => void,
    handleLogout: () => void
}

export interface IAuthProvider {
    children: ReactNode
}


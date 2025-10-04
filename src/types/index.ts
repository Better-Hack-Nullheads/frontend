export interface ApiEndpoint {
  id: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  url: string;
  description: string;
  parameters: Parameter[];
  requestExample?: string;
  responseExample: string;
  codeSnippets: {
    javascript: string;
    curl: string;
  };
}

export interface Parameter {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

export interface ChangelogEntry {
  id: string;
  version: string;
  date: string;
  changes: string[];
}

export type UserRole = 'admin' | 'consumer';

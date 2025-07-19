# Bank API

A simple banking API built with TypeScript and Express.js that provides basic banking operations including deposits, withdrawals, and transfers between accounts.

## 🚀 Features

- **Account Management**: Create and manage bank accounts
- **Deposits**: Add funds to accounts
- **Withdrawals**: Remove funds from accounts
- **Transfers**: Move funds between accounts
- **Balance Queries**: Check account balances
- **Event-Driven Architecture**: Handle banking events through a RESTful API
- **TypeScript**: Full type safety and better development experience

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Package Manager**: pnpm
- **Development**: ts-node-dev for hot reloading

## 📋 Prerequisites

- Node.js (v16 or higher)
- pnpm (v10.10.0 or higher)

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd bank-api
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

The server will start on `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── controllers/          # Request handlers
│   ├── BalanceController.ts
│   ├── EventController.ts
│   └── ResetController.ts
├── interfaces/           # TypeScript interfaces
│   ├── IAccount.ts
│   └── IEvent.ts
├── models/              # Data models
├── routes/              # API routes
│   └── index.ts
├── services/            # Business logic
│   ├── account/
│   ├── event/
│   └── ResetService.ts
├── store/               # Data storage
└── index.ts             # Application entry point
```

## 📚 API Documentation

### Base URL

```
http://localhost:3000
```

### Endpoints

#### 1. Get Account Balance

**GET** `/balance`

Query the balance of a specific account.

**Query Parameters:**

- `account_id` (required): The account identifier

**Response:**

- `200`: Account balance (number)
- `400`: Bad request (missing account_id)
- `404`: Account not found (returns "0")

**Example:**

```bash
curl "http://localhost:3000/balance?account_id=123"
```

#### 2. Handle Banking Event

**POST** `/event`

Process banking events (deposits, withdrawals, transfers).

**Request Body:**

```typescript
{
  id: string;
  type: "deposit" | "transfer" | "withdraw";
  origin?: string;        // Required for withdraw/transfer
  destination?: string;   // Required for deposit/transfer
  amount: number;         // Must be greater than 0
}
```

**Response:**

- `201`: Event processed successfully
- `400`: Bad request (invalid payload)
- `404`: Account not found

**Example Events:**

**Deposit:**

```bash
curl -X POST http://localhost:3000/event \
  -H "Content-Type: application/json" \
  -d '{
    "id": "1",
    "type": "deposit",
    "destination": "100",
    "amount": 10
  }'
```

**Withdraw:**

```bash
curl -X POST http://localhost:3000/event \
  -H "Content-Type: application/json" \
  -d '{
    "id": "2",
    "type": "withdraw",
    "origin": "100",
    "amount": 5
  }'
```

**Transfer:**

```bash
curl -X POST http://localhost:3000/event \
  -H "Content-Type: application/json" \
  -d '{
    "id": "3",
    "type": "transfer",
    "origin": "100",
    "destination": "200",
    "amount": 15
  }'
```

#### 3. Reset System

**POST** `/reset`

Reset all accounts and clear the system state.

**Response:**

- `200`: System reset successfully

**Example:**

```bash
curl -X POST http://localhost:3000/reset
```

## 🧪 Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build the project for production
- `pnpm start` - Start the production server
- `pnpm test` - Run tests (not implemented yet)

## 🔧 Development

### Building for Production

```bash
pnpm build
pnpm start
```

### TypeScript Configuration

The project uses TypeScript with strict type checking. Configuration is in `tsconfig.json`.

## 📝 Event Types

### Deposit Event

Creates a new account if it doesn't exist and adds the specified amount.

### Withdraw Event

Removes the specified amount from the origin account. Fails if insufficient funds.

### Transfer Event

Moves the specified amount from origin to destination account. Creates destination account if it doesn't exist. Fails if origin has insufficient funds.

## 🔒 Error Handling

The API returns appropriate HTTP status codes:

- `200`: Success
- `201`: Created (event processed)
- `400`: Bad Request (invalid input)
- `404`: Not Found (account doesn't exist)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🐛 Issues

If you encounter any issues, please open an issue on the repository with a detailed description of the problem.

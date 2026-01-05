import transactionStep1 from "@/assets/screenshots/new-transaction.webp";
import transactionStep2 from "@/assets/screenshots/add-expense.webp";
import transactionsStep3 from "@/assets/screenshots/transactions-list.webp";

import budgetStep1 from "@/assets/screenshots/categories.webp";

import editTransaction from "@/assets/screenshots/editing-transaction.webp";
import deleteTransaction from "@/assets/screenshots/confirming-delete.webp";

import newTransfer from "@/assets/screenshots/new-transfer.webp";

import transactionListWithFilters from "@/assets/screenshots/transactions-list-filters.webp";

import accountsList from "@/assets/screenshots/accounts-list.webp";

import editingAccount from "@/assets/screenshots/editing-account.webp";
import deletingAccount from "@/assets/screenshots/confirming-delete-account.webp";

import settingsScreen from "@/assets/screenshots/settings.webp";
import exportData from "@/assets/screenshots/export-data.webp";
import savingData from "@/assets/screenshots/saving-data.webp";
import importData from "@/assets/screenshots/import-data.webp";
import restoringData from "@/assets/screenshots/restoring-data.webp";

import creatingIncomeGroup from "@/assets/screenshots/creating-income-group.webp";
import viewingIncomeGroupDetails from "@/assets/screenshots/income-group-item.webp";

export const tutorialsScreenshots: Record<
	string,
	{ src: string; alt: string }[]
> = {
	"create-transaction": [
		{
			src: transactionStep1.src,
			alt: "Creating a new transaction",
		},
		{
			src: transactionStep2.src,
			alt: "Adding an expense",
		},
		{
			src: transactionsStep3.src,
			alt: "Viewing the transactions list",
		},
	],
    "understanding-budget": [
        {
            src: budgetStep1.src,
            alt: "Selecting a main account for budget calculation",
        }
    ],
    "edit-delete-transaction": [
        {
            src: editTransaction.src,
            alt: "Editing a transaction",
        },
        {
            src: deleteTransaction.src,
            alt: "Confirming deletion of a transaction",
        }
    ],
    "new-transfer": [
        {
            src: newTransfer.src,
            alt: "Creating a new transfer between accounts",
        }
    ],
    "transactions-history": [
        {
            src: transactionListWithFilters.src,
            alt: "Transactions list with filters shown",
        }
    ],
    'creating-account': [
        {
            src: accountsList.src,
            alt: "Viewing the list of accounts",
        }
    ],
    'edit-delete-account': [
        {
            src: editingAccount.src,
            alt: "Editing an account",
        },
        {
            src: deletingAccount.src,
            alt: "Confirming deletion of an account",
        }
    ],
    "backup-restore-data": [
        {
            src: settingsScreen.src,
            alt: "Viewing the settings screen",
        },
        {
            src: exportData.src,
            alt: "Exporting data to a backup file",
        },
        {
            src: savingData.src,
            alt: "Saving data to a backup file",
        },
        {
            src: importData.src,
            alt: "Importing data from a backup file",
        },
        {
            src: restoringData.src,
            alt: "Restoring data from a backup file",
        }
    ],
    "income-groups": [
        {
            src: creatingIncomeGroup.src,
            alt: "Creating a new income group",
        },
        {
            src: viewingIncomeGroupDetails.src,
            alt: "Viewing income group details",
        }
    ]
};


import z from "zod";

export const reportschema = z.object({
    reportDate: z.string().min(1, "Select report date"),
    workDescription: z.string().min(1, "Enter work description"),
    workCategory: z.string().min(1, "Select work category"),
    completion: z.coerce.number().min(0, "Enter completion percentage").max(100, "Maximum 100"),
    workStatus: z.string().min(1, "Select work status")
});

export const timesheetschema = z.object({
    workDate: z.string().min(1, "Select work date"),
    workers: z.coerce.number().min(1, "Enter number of workers"),
    workingHours: z.coerce.number().min(1, "Enter working hours"),
    overtime: z.coerce.number().min(0, "Enter overtime hours")
});

export const materialschema = z.object({
    materialName: z.string().min(1, "Enter material name"),
    quantityUsed: z.coerce.number().min(1, "Enter quantity used"),
    remainingQuantity: z.coerce.number().min(0, "Enter remaining quantity"),
    unit: z.string().min(1, "Select unit")
});

export const expenseschema = z.object({
    expenseCategory: z.string().min(1, "Select expense category"),
    amount: z.coerce.number().min(1, "Enter amount"),
    expenseDate: z.string().min(1, "Select expense date"),
    expenseDescription: z.string().min(1, "Enter description")
});

export const delayschema = z.object({
    affectedWork: z.string().min(1, "Enter affected work"),
    delayReason: z.string().min(1, "Select delay reason"),
    delayDuration: z.coerce.number().min(1, "Enter delay duration"),
    delayDescription: z.string().min(1, "Enter description")
});

export const milestoneschema = z.object({
    milestoneName: z.string().min(1, "Enter milestone name"),
    dueDate: z.string().min(1, "Select due date"),
    milestoneStatus: z.string().min(1, "Select milestone status")
});

export const documentschema = z.object({
    documentName: z.string().min(1, "Enter document name"),
    documentType: z.string().min(1, "Select document type")
});

export const qualityschema = z.object({
    inspectionDate: z.string().min(1, "Select inspection date"),
    inspectionCategory: z.string().min(1, "Select work category"),
    inspectionStatus: z.string().min(1, "Select inspection status"),
    remarks: z.string().min(1, "Enter remarks")
});

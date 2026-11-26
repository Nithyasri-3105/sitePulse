
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import {reportschema, timesheetschema, materialschema, expenseschema, delayschema, milestoneschema,documentschema,qualityschema} from "../components/FormSchema/reportschema";

import { zodResolver } from "@hookform/resolvers/zod";

function ProjectWorkspace() {
  const navigate = useNavigate();

  const [sitePhoto, setSitePhoto] = useState(null);
  const [documentFile, setDocumentFile] = useState(null);

  const reportForm = useForm({
    resolver: zodResolver(reportschema)
  });

  const timesheetForm = useForm({
    resolver: zodResolver(timesheetschema)
  });

  const materialForm = useForm({
    resolver: zodResolver(materialschema)
  });

  const expenseForm = useForm({
    resolver: zodResolver(expenseschema)
  });

  const delayForm = useForm({
    resolver: zodResolver(delayschema)
  });

  const milestoneForm = useForm({
    resolver: zodResolver(milestoneschema)
  });

  const documentForm = useForm({
    resolver: zodResolver(documentschema)
  });

  const qualityForm = useForm({
    resolver: zodResolver(qualityschema)
  });

  function submitData(data, message) {
    console.log(data);
    alert(message);
  }

  return (
    <div>
      <h2>Project Workspace</h2>

      <h3>1. Daily Construction Report</h3>
      <form onSubmit={reportForm.handleSubmit((data) =>
        submitData({ ...data, sitePhoto }, "Report Submitted")
      )}>
        <input type="date" {...reportForm.register("reportDate")} />
        <p>{reportForm.formState.errors.reportDate?.message}</p>

        <textarea placeholder="Work Description" {...reportForm.register("workDescription")} />
        <p>{reportForm.formState.errors.workDescription?.message}</p>

        <select {...reportForm.register("workCategory")}>
          <option value="">Select Work Category</option>
          <option value="Foundation">Foundation</option>
          <option value="Structure">Structure</option>
          <option value="Electrical">Electrical</option>
          <option value="Painting">Painting</option>
          <option value="Other">Other</option>
        </select>
        <p>{reportForm.formState.errors.workCategory?.message}</p>

        <input type="number" placeholder="Completion Percentage" min="0" max="100" {...reportForm.register("completion")} />
        <p>{reportForm.formState.errors.completion?.message}</p>

        <select {...reportForm.register("workStatus")}>
          <option value="">Select Work Status</option>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <p>{reportForm.formState.errors.workStatus?.message}</p>

        <input type="file" accept="image/*" onChange={(e) => setSitePhoto(e.target.files[0])} />

        <button type="submit">Submit Report</button>
      </form>

      <h3>2. Timesheet</h3>
      <form onSubmit={timesheetForm.handleSubmit((data) =>
        submitData(data, "Timesheet Submitted")
      )}>
        <input type="date" {...timesheetForm.register("workDate")} />
        <p>{timesheetForm.formState.errors.workDate?.message}</p>

        <input type="number" placeholder="Number of Workers" {...timesheetForm.register("workers")} />
        <p>{timesheetForm.formState.errors.workers?.message}</p>

        <input type="number" placeholder="Working Hours" {...timesheetForm.register("workingHours")} />
        <p>{timesheetForm.formState.errors.workingHours?.message}</p>

        <input type="number" placeholder="Overtime Hours" {...timesheetForm.register("overtime")} />
        <p>{timesheetForm.formState.errors.overtime?.message}</p>

        <button type="submit">Submit Timesheet</button>
      </form>

      <h3>3. Material Tracking</h3>
      <form onSubmit={materialForm.handleSubmit((data) =>
        submitData(data, "Material Details Saved")
      )}>
        <input type="text" placeholder="Material Name" {...materialForm.register("materialName")} />
        <p>{materialForm.formState.errors.materialName?.message}</p>

        <input type="number" placeholder="Quantity Used" {...materialForm.register("quantityUsed")} />
        <p>{materialForm.formState.errors.quantityUsed?.message}</p>

        <input type="number" placeholder="Remaining Quantity" {...materialForm.register("remainingQuantity")} />
        <p>{materialForm.formState.errors.remainingQuantity?.message}</p>

        <input type="text" placeholder="Unit (kg, bags, etc.)" {...materialForm.register("unit")} />
        <p>{materialForm.formState.errors.unit?.message}</p>

        <button type="submit">Save Material</button>
      </form>

      <h3>4. Expense Management</h3>
      <form onSubmit={expenseForm.handleSubmit((data) =>
        submitData(data, "Expense Saved")
      )}>
        <input type="text" placeholder="Expense Category" {...expenseForm.register("expenseCategory")} />
        <p>{expenseForm.formState.errors.expenseCategory?.message}</p>

        <input type="number" placeholder="Amount" {...expenseForm.register("amount")} />
        <p>{expenseForm.formState.errors.amount?.message}</p>

        <input type="date" {...expenseForm.register("expenseDate")} />
        <p>{expenseForm.formState.errors.expenseDate?.message}</p>

        <textarea placeholder="Description" {...expenseForm.register("expenseDescription")} />
        <p>{expenseForm.formState.errors.expenseDescription?.message}</p>

        <button type="submit">Save Expense</button>
      </form>

      <h3>5. Delay Tracking</h3>
      <form onSubmit={delayForm.handleSubmit((data) =>
        submitData(data, "Delay Details Saved")
      )}>
        <input type="text" placeholder="Affected Work" {...delayForm.register("affectedWork")} />
        <p>{delayForm.formState.errors.affectedWork?.message}</p>

        <input type="text" placeholder="Delay Reason" {...delayForm.register("delayReason")} />
        <p>{delayForm.formState.errors.delayReason?.message}</p>

        <input type="number" placeholder="Delay Duration in Days" {...delayForm.register("delayDuration")} />
        <p>{delayForm.formState.errors.delayDuration?.message}</p>

        <textarea placeholder="Description" {...delayForm.register("delayDescription")} />
        <p>{delayForm.formState.errors.delayDescription?.message}</p>

        <button type="submit">Save Delay</button>
      </form>

      <h3>6. Milestone Management</h3>
      <form onSubmit={milestoneForm.handleSubmit((data) =>
        submitData(data, "Milestone Saved")
      )}>
        <input type="text" placeholder="Milestone Name" {...milestoneForm.register("milestoneName")} />
        <p>{milestoneForm.formState.errors.milestoneName?.message}</p>

        <input type="date" {...milestoneForm.register("dueDate")} />
        <p>{milestoneForm.formState.errors.dueDate?.message}</p>

        <select {...milestoneForm.register("milestoneStatus")}>
          <option value="">Select Status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <p>{milestoneForm.formState.errors.milestoneStatus?.message}</p>

        <button type="submit">Save Milestone</button>
      </form>

      <h3>7. Document Upload</h3>
      <form onSubmit={documentForm.handleSubmit((data) =>
        submitData({ ...data, documentFile }, "Document Details Saved")
      )}>
        <input type="text" placeholder="Document Name" {...documentForm.register("documentName")} />
        <p>{documentForm.formState.errors.documentName?.message}</p>

        <input type="text" placeholder="Document Type" {...documentForm.register("documentType")} />
        <p>{documentForm.formState.errors.documentType?.message}</p>

        <input type="file" onChange={(e) => setDocumentFile(e.target.files[0])} required />

        <button type="submit">Upload Document</button>
      </form>

      <h3>8. Quality Inspection</h3>
      <form onSubmit={qualityForm.handleSubmit((data) =>
        submitData(data, "Inspection Details Saved")
      )}>
        <input type="date" {...qualityForm.register("inspectionDate")} />
        <p>{qualityForm.formState.errors.inspectionDate?.message}</p>

        <input type="text" placeholder="Work Category" {...qualityForm.register("inspectionCategory")} />
        <p>{qualityForm.formState.errors.inspectionCategory?.message}</p>

        <select {...qualityForm.register("inspectionStatus")}>
          <option value="">Select Inspection Status</option>
          <option value="Passed">Passed</option>
          <option value="Failed">Failed</option>
          <option value="Pending">Pending</option>
        </select>
        <p>{qualityForm.formState.errors.inspectionStatus?.message}</p>

        <textarea placeholder="Remarks" {...qualityForm.register("remarks")} />
        <p>{qualityForm.formState.errors.remarks?.message}</p>

        <button type="submit">Save Inspection</button>
      </form>

      <button onClick={() => navigate("/engineer/projects")}>Back to Projects</button>
      <button onClick={() => navigate("/engineer/complaints")}>Complaint Management</button>
      <button onClick={() => navigate("/engineer/purchases")}>Product Purchase</button>
      <button onClick={() => navigate("/engineer/dashboard")}>Dashboard</button>
    </div>
  );
}

export default ProjectWorkspace;

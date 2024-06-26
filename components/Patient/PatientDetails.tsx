import React, { useState } from "react"
import { Patient } from "utils"
import Image from "next/image"
import { PiDotsThree } from "react-icons/pi"
import { useRouter } from "next/navigation"
import { IoEyeSharp, IoPrintOutline } from "react-icons/io5"
import PrintRecordModal from "components/Modals/PrintRecordModal"

export default function PatientDetails({ params }: { params: { patientId: string } }) {
  const router = useRouter()
  const [isDone, setIsDone] = useState<boolean>(false)
  const [activeTab, setActiveTab] = useState("appointments")
  const { patientId } = params
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedRecord, setSelectedRecord] = useState(null)

  const toggleDone = () => {
    setIsDone(!isDone)
  }

  const handleGoBack = () => {
    router.back()
  }

  const patientDetail = Patient.find((patient) => patient.id === patientId)

  let filteredList = patientDetail ? patientDetail.appointment : []
  let filteredPrescription = patientDetail ? patientDetail.prescriptions : []
  let filteredMedicalRecords = patientDetail ? patientDetail.medicals : []

  if (searchQuery) {
    filteredList = filteredList.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleViewClick = (record: any) => {
    setSelectedRecord(record)
    setModalVisible(true)
  }

  const renderAllAppointments = () => {
    return (
      <div className="flex flex-col gap-2">
        {filteredList.map((appointment) => (
          <div
            key={appointment.id}
            className="flex w-full cursor-pointer items-center justify-between rounded-lg border p-2"
          >
            <div className="flex items-center gap-1 text-sm font-bold">
              <Image src={appointment.doctor_image} height={40} width={40} alt="" />
              <div>
                <p>{appointment.doctor_assigned}</p>
                <small className="text-xm ">Doctor Assigned</small>
              </div>
            </div>
            <div className="max-md:hidden">
              <p className="text-sm font-bold">{appointment.time}</p>
              <small className="text-xm ">Appointment Date</small>
            </div>
            <div className="max-md:hidden">
              <p className="text-sm font-bold">{appointment.complain}</p>
              <small className="text-xm ">complain</small>
            </div>
            <div className="">
              <p className="text-sm font-bold">₦ {appointment.amount}</p>
              <small className="text-xm ">Amount</small>
            </div>
            <div className="max-md:hidden">
              <p className="rounded bg-[#46FFA6] px-2 py-[2px] text-xs text-[#000000]">{appointment.status}</p>
            </div>
            <PiDotsThree />
          </div>
        ))}
      </div>
    )
  }

  const renderPrescriptions = () => {
    return (
      <div className="flex flex-col gap-2">
        {filteredPrescription.map((appointment) => (
          <div
            key={appointment.id}
            className="flex w-full cursor-pointer items-center justify-between rounded-lg border p-2"
          >
            <div className="">
              <p className="text-sm font-bold">{appointment.doctor_assigned}</p>
              <small className="text-xm ">doctor</small>
            </div>
            <div className="">
              <p className="text-sm font-bold">{appointment.medication_name}</p>
              <small className="text-xm ">Medication name</small>
            </div>
            <div className="max-md:hidden">
              <p className="text-sm font-bold">{appointment.category}</p>
              <small className="text-xm ">Category</small>
            </div>
            <div className="max-md:hidden">
              <p className="text-sm font-bold">{appointment.quantity}</p>
              <small className="text-xm ">Quantity</small>
            </div>
            <div className="max-md:hidden">
              <p className="text-sm font-bold">{appointment.dosage}</p>
              <small className="text-xm ">Dosage</small>
            </div>
            <div className="max-md:hidden">
              <p className="text-sm font-bold">{appointment.usage}</p>
              <small className="text-xm ">Usage</small>
            </div>
            <PiDotsThree />
          </div>
        ))}
      </div>
    )
  }

  const renderMedicalRecord = () => {
    return (
      <div className="flex flex-col gap-2">
        {filteredMedicalRecords.map((record) => (
          <div
            key={record.id}
            className="flex w-full cursor-pointer items-center justify-between rounded-lg border p-2"
          >
            <div className="max-md:hidden">
              <p className="text-sm font-bold">{record.id}</p>
              <small className="text-xm ">{record.time}</small>
            </div>
            <div className="">
              <p className="text-sm font-bold">{record.name}</p>
              <small className="text-xm ">Name</small>
            </div>
            <div className="flex items-center gap-1 text-sm font-bold max-md:hidden">
              <span>
                <Image src={record.doctor_image} height={40} width={40} alt="" />
              </span>
              <div>
                <p>{record.doctor_assigned}</p>
                <small className="text-xm ">Doctor Assigned</small>
              </div>
            </div>
            <div className="max-md:hidden">
              <p className="text-sm font-bold">{record.test}</p>
              <small className="text-xm ">Test</small>
            </div>
            <div className="flex gap-2">
              <button className="flex w-28 items-center justify-center gap-1 rounded bg-[#46FFA6] px-2 py-[2px] text-xs text-[#000000]">
                <IoPrintOutline /> Print
              </button>
              <button
                className="flex w-28 items-center justify-center gap-1 rounded bg-[#349DFB] px-2 py-[2px] text-xs text-[#000000]"
                onClick={() => handleViewClick(record)}
              >
                <IoEyeSharp /> View
              </button>
            </div>
          </div>
        ))}
      </div>
    )
  }

  const renderBillingRecord = () => {
    const billingRecord = filteredList.filter((appointment) => appointment.status === "done")
    return (
      <div className="flex flex-col gap-2">
        {billingRecord.map((appointment) => (
          <div
            key={appointment.id}
            className="flex w-full cursor-pointer items-center justify-between rounded-lg border p-2"
          >
            <div className="max-md:hidden">
              <p className="text-sm font-bold">{appointment.id}</p>
              <small className="text-xm ">ID</small>
            </div>
            <div className="">
              <p className="text-sm font-bold">{appointment.name}</p>
              <small className="text-xm ">Name</small>
            </div>
            <div>
              <div className="flex gap-1 text-sm font-bold">
                <span>
                  <Image src={appointment.doctor_image} height={60} width={60} alt="" />
                </span>
                {appointment.doctor_assigned}
              </div>
              <small className="text-xm ">Doctor Assigned</small>
            </div>
            <div className="max-md:hidden">
              <p className="text-sm font-bold">{appointment.time}</p>
              <small className="text-xm ">Time</small>
            </div>
            <div className="max-md:hidden">
              <p className="rounded bg-[#46FFA6] px-2 py-[2px] text-xs text-[#000000]">{appointment.complain}</p>
              <small className="text-xm ">complain</small>
            </div>
            <PiDotsThree />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      <div className="tab-bg mb-8 flex items-center gap-3 rounded-lg p-1 md:w-[350px] md:border">
        <button
          className={`${activeTab === "appointments" ? "active-tab" : "inactive-tab"}`}
          onClick={() => setActiveTab("appointments")}
        >
          Appointments
        </button>
        <button
          className={`${activeTab === "prescriptions" ? "active-tab" : "inactive-tab"}`}
          onClick={() => setActiveTab("prescriptions")}
        >
          Prescriptions
        </button>
        <button
          className={`${activeTab === "medical" ? "active-tab" : "inactive-tab"}`}
          onClick={() => setActiveTab("medical")}
        >
          Medical Record
        </button>
      </div>

      {activeTab === "appointments" ? renderAllAppointments() : null}
      {activeTab === "prescriptions" ? renderPrescriptions() : null}
      {activeTab === "medical" ? renderMedicalRecord() : null}
      {activeTab === "billing" ? renderBillingRecord() : null}

      <PrintRecordModal show={modalVisible} onClose={() => setModalVisible(false)} record={selectedRecord} />
    </div>
  )
}

import React from "react";
import { CSVLink } from "react-csv";
import ClientHeader from "./components/clientHeader";

import { data } from "./api/data";
import { Table } from "antd";

import "antd/dist/antd.css";
import { useState } from "react";

const csvHeaders = [
  { label: "Nama", key: "name" },
  { label: "Status Kehadiran", key: "status" },
  { label: "Pesan", key: "message" },
];

const Rsvp = () => {
  const namaCLient = "indah-rega";

  const columns = [
    {
      title: "Nama",
      dataIndex: "name",
      key: "name",
      width: "20%",
    },
    {
      title: "Status Kehadiran",
      dataIndex: "status",
      key: "status",
      width: "15%",
    },
    {
      title: "Pesan",
      dataIndex: "message",
      key: "message",
    },
  ];

  const statusCount = (status) => {
    return data.filter((d) => d.status === status).length;
  };

  return (
    <div className="bg-gray-200">
      <ClientHeader />
      <section className="px-4 md:px-36 py-6 mb-4 pt-36">
        <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 p-3 mb-4">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="mr-4 text-green-600">
              Hadir: {statusCount("Hadir")}
            </div>
            <div className="mr-4 text-yellow-600">
              Ragu-ragu: {statusCount("Ragu-ragu")}
            </div>
            <div className="text-red-600">
              Tidak Hadir: {statusCount("Tidak Hadir")}
            </div>
          </div>
          <div className="self-end">
            <CSVLink
              data={data}
              headers={csvHeaders}
              filename={`${namaCLient}.csv`}
              className="btn btn-primary"
              target="_blank"
            >
              Download Data
            </CSVLink>
          </div>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          rowKey={(record) => record._id}
          pagination={{
            defaultPageSize: 10,
            showSizeChanger: true,
            pageSizeOptions: ["10", "20", "30"],
          }}
        />
      </section>
    </div>
  );
};

export default Rsvp;

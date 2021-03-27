import React from "react";
import { CSVLink } from "react-csv";
import { useRouter } from "next/router";
import { Table } from "antd";

import ClientHeader from "../components/clientHeader";

import "antd/dist/antd.css";

const csvHeaders = [
  { label: "Nama", key: "name" },
  { label: "Status Kehadiran", key: "status" },
  { label: "Pesan", key: "message" },
];

const Rsvp = ({ rsvp }) => {
  const router = useRouter();
  const { namaClient } = router.query;

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
    return rsvp.filter((d) => d.status === status).length;
  };

  return (
    <div className="bg-gray-200">
      <ClientHeader namaClient={namaClient || ""} />
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
              data={rsvp}
              headers={csvHeaders}
              filename={`${namaClient}.csv`}
              className="btn btn-primary"
              target="_blank"
            >
              Download Data
            </CSVLink>
          </div>
        </div>
        <Table
          columns={columns}
          dataSource={rsvp}
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

export async function getServerSideProps(context) {
  const name = context.params.namaClient;

  const res = await fetch(`https://dilamar.vercel.app/api/${name}/rsvp`, {
    method: "GET",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
      Accept: "application/json; charset=UTF-8",
    },
  });
  const data = await res.json();
  const rsvp = await data.data;

  const getData = () => {
    if (rsvp) {
      return rsvp;
    } else {
      return [];
    }
  };

  return {
    props: { rsvp: getData() },
  };
}

export default Rsvp;

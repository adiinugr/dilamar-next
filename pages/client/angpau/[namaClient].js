import React from "react";
import { CSVLink } from "react-csv";
import { useRouter } from "next/router";
import { Table } from "antd";

import ClientHeader from "../components/clientHeader";

import "antd/dist/antd.css";

const csvHeaders = [
  { label: "Nama", key: "name" },
  { label: "Bank", key: "bank" },
  { label: "Nominal", key: "nominal" },
];

const Angpau = ({ angpau }) => {
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
      title: "Rekening Tujuan",
      dataIndex: "bank",
      key: "bank",
      width: "15%",
    },
    {
      title: "Nominal",
      dataIndex: "nominal",
      key: "nominal",
      render: (value) => <p>{`Rp ${value}`}</p>,
    },
  ];

  return (
    <div className="bg-gray-200">
      <ClientHeader namaClient={namaClient} headerTitle="DAFTAR ANGPAU" />
      <section className="px-4 md:px-36 py-6 mb-4 pt-36">
        <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 p-3 mb-4">
          <div className="self-end">
            <CSVLink
              data={angpau}
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
          dataSource={angpau}
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

  const res = await fetch(`https://dilamar.vercel.app/api/${name}/angpau`, {
    method: "GET",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
      Accept: "application/json; charset=UTF-8",
    },
  });
  const data = await res.json();
  const angpau = await data.data;

  const getData = () => {
    if (angpau) {
      return angpau;
    } else {
      return [];
    }
  };

  return {
    props: { angpau: getData() },
  };
}

export default Angpau;

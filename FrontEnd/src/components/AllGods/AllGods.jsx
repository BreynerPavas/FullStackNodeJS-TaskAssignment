import React, { useEffect } from "react";
import "./AllGods.scss";
import { useDispatch, useSelector } from "react-redux";
import { erase, getAll } from "../../features/gods/godSlice";
import { Link } from "react-router-dom";

const AllGods = () => {
  const { gods } = useSelector((state) => state.gods);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, []);

  const eraseGod = async (e) => {
    await dispatch(erase(e.target.id));
    dispatch(getAll());
    
  }

  return (
    <div className="return container">
      <div className="col-md-10 col-md-offset-1 container">
        <div className="panel panel-default panel-table">
          <div className="panel-heading">
            <div className="row d-flex justify-content-between">
              <div className="col col-xs-6">
                <h3 className="panel-title">All Gods</h3>
              </div>
              <div className="col col-xs-6 text-right d-flex justify-content-end align-items-center">
                <button type="button" className="btn btn-sm btn-primary btn-create">
                  <Link to="/" className="text-white text-decoration-none">Create</Link>
                </button>
              </div>
            </div>
          </div>

          <div className="panel-body">
            {/* Si no hay dioses, mostrar mensaje */}
            {(!gods || gods.length === 0) ? (
              <div className="alert alert-warning text-center" role="alert">
                Please first create a god to visualize
              </div>
            ) : (
              <table className="table table-striped table-bordered table-list">
                <thead>
                  <tr>
                    <th>
                      <em className="fa fa-cog"></em>
                    </th>
                    <th className="hidden-xs">Humility</th>
                    <th>Name</th>
                    <th>SuperPower</th>
                  </tr>
                </thead>
                <tbody>
                  {gods.map((god) => (
                    <tr key={god.id}>
                      <td align="center">
                        <button className="btn btn-danger">
                          <em className="fa fa-trash" id={god.id} onClick={eraseGod}>X</em>
                        </button>
                      </td>
                      <td className="hidden-xs">{god.humility_score}</td>
                      <td>{god.name}</td>
                      <td>{god.superpower}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllGods;

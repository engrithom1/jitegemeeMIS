<template>
    <div class="midde_cont">
      <div class="container-fluid">
        <div class="row column_title">
          <div class="col-md-12">
            <div class="page_title">
              <h2>Accademic > Student Fees</h2>
            </div>
          </div>
        </div>
        <!--contents heaa-->
        <div class="row column4 graph">
            <div class="col-sm-12 col-md-5">
            <div class="white_shd full margin_bottom_30">
            <div class="full graph_head">
              <div class="d-flex justify-content-between">
                <div class="heading1 margin_0 "><h2>Add Fee</h2></div>
                <!--button v-on:click="this.parentExist" class="btn btn-success ml-0">Add Parent</button-->
              </div>
            </div>
            <div class="full progress_bar_inner">
                <form class="p-3">
                    <div class="form-group">
                      <label for="cname">Fee Name*</label>
                      <input
                        type="text"
                        class="form-control"
                        id="cname"
                        placeholder="Tuition Fees"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="form-group">
                      <label for="famount">Amount TZS*</label>
                      <input
                        type="text"
                        class="form-control"
                        id="famount"
                        placeholder="230000"
                        aria-describedby="emailHelp"
                      />
                    </div>

                    <button class="btn btn-success">Submit</button>
                    
                </form>    
            </div>
          </div>
          </div>
          <div class="col-sm-12 col-md-7">
            <div class="white_shd full margin_bottom_30">
            <div class="full graph_head">
              <div class="d-flex justify-content-between">
                <div class="heading1 margin_0 "><h2>Fees</h2></div>
                <!--button v-on:click="this.parentExist" class="btn btn-success ml-0">Add Parent</button-->
              </div>
            </div>
            <div class="full progress_bar_inner">
              <div class="row">
                <div class="col-md-12">
                  <div class="inbox-body">
                  <div class="mail-option">
                    
                    <table class="table table-inbox table-hover">
                      <thead>
                        <th><b>Fee Name</b></th>
                        <th><b>Amount</b></th>
                        <th><b>Action</b></th>
                      </thead>
                      <tbody>
                        <tr class="">
                          <td class="view-message inbox-small-cells">A-level tuition fee</td>
                          <td class="view-message inbox-small-cells">400,000</td>
                          <td class="view-message">
                            <button class="btn btn-primary mr-1">Edit</button>
                            <button class="btn btn-danger">Delete</button>
                          </td>
                        </tr>
                        <tr class="">
                          <td class="view-message inbox-small-cells">Libraly</td>
                          <td class="view-message inbox-small-cells">12,000</td>
                          <td class="view-message">
                            <button class="btn btn-primary mr-1">Edit</button>
                            <button class="btn btn-danger">Delete</button>
                          </td>
                        </tr>
                        <tr class="">
                          <td class="view-message inbox-small-cells">Food</td>
                          <td class="view-message inbox-small-cells">270,000</td>
                          <td class="view-message">
                            <button class="btn btn-primary mr-1">Edit</button>
                            <button class="btn btn-danger">Delete</button>
                          </td>
                        </tr>
                        <tr class="">
                          <td class="view-message inbox-small-cells">O-level tuition fee</td>
                          <td class="view-message inbox-small-cells">370,000</td>
                          <td class="view-message">
                            <button class="btn btn-primary mr-1">Edit</button>
                            <button class="btn btn-danger">Delete</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>    
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        <!--contents heaa-->
      </div>
      <!-- footer -->
      <div class="container-fluid">
        <div class="footer">
          <p>
            Copyright © 2023 Designed by aploscoder. All rights reserved.<br />
           
          </p>
        </div>
      </div>
    </div>
  </template>
  
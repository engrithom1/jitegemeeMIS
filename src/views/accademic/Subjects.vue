<template>
    <div class="midde_cont">
      <div class="container-fluid">
        <div class="row column_title">
          <div class="col-md-12">
            <div class="page_title">
              <h2>Accademic > Subjects</h2>
            </div>
          </div>
        </div>
        <!--contents heaa-->
        <div class="row column4 graph">
            <div class="col-sm-12 col-md-5">
            <div class="white_shd full margin_bottom_30">
            <div class="full graph_head">
              <div class="d-flex justify-content-between">
                <div class="heading1 margin_0 "><h2>Add Subject</h2></div>
                <!--button v-on:click="this.parentExist" class="btn btn-success ml-0">Add Parent</button-->
              </div>
            </div>
            <div class="full progress_bar_inner">
                <form class="p-3">
                    
                    <div class="form-group">
                      <label for="cname">Subject Name*</label>
                      <input
                        type="text"
                        class="form-control"
                        id="cname"
                        placeholder="A"
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
                <div class="heading1 margin_0 "><h2>Subjects</h2></div>
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
                        <th><b>Subject Name</b></th>
                        <th><b>Action</b></th>
                      </thead>
                      <tbody>
                        <tr class="">
                          <td class="view-message inbox-small-cells">Physics</td>
                          <td class="view-message">
                            <button class="btn btn-primary mr-1">Edit</button>
                            <button class="btn btn-danger">Delete</button>
                          </td>
                        </tr>
                        <tr class="">
                          <td class="view-message inbox-small-cells">Baic Mathematics</td>
                          <td class="view-message">
                            <button class="btn btn-primary mr-1">Edit</button>
                            <button class="btn btn-danger">Delete</button>
                          </td>
                        </tr>
                        <tr class="">
                          <td class="view-message inbox-small-cells">Biology</td>
                          <td class="view-message">
                            <button class="btn btn-primary mr-1">Edit</button>
                            <button class="btn btn-danger">Delete</button>
                          </td>
                        </tr>
                        <tr class="">
                          <td class="view-message inbox-small-cells">Advanced Mathematics</td>
                          <td class="view-message ">
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
  
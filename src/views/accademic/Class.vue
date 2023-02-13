<template>
    <div class="midde_cont">
      <div class="container-fluid">
        <div class="row column_title">
          <div class="col-md-12">
            <div class="page_title">
              <h2>Accademic > Classrooms</h2>
            </div>
          </div>
        </div>
        <!--contents heaa-->
        <div class="row column4 graph">
            <div class="col-sm-12 col-md-5">
            <div class="white_shd full margin_bottom_30">
            <div class="full graph_head">
              <div class="d-flex justify-content-between">
                <div class="heading1 margin_0 "><h2>Add Class</h2></div>
                <!--button v-on:click="this.parentExist" class="btn btn-success ml-0">Add Parent</button-->
              </div>
            </div>
            <div class="full progress_bar_inner">
                <form class="p-3">
                    <div class="form-group">
                        <select class="form-control" name="" id="">
                        <option value="">All Level</option>
                        <option value="">Form I</option>
                        <option value="">Form II</option>
                        <option value="">Form III</option>
                        <option value="">Form IV</option>
                        <hr/>
                        <option value="">Form V</option>
                        <option value="">Form VI</option>
                      </select> 
                    </div>
                    <div class="form-group">
                      <label for="cname">Class Name*</label>
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
                <div class="heading1 margin_0 "><h2>Classrooms</h2></div>
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
                        <th><b>Level</b></th>
                        <th><b>Class Name</b></th>
                        <th><b>Students</b></th>
                        <th><b>Action</b></th>
                      </thead>
                      <tbody>
                        <tr class="">
                          <td class="view-message">Form I</td>
                          <td class="view-message inbox-small-cells">A</td>
                          <td class="view-message inbox-small-cells">40</td>
                          <td class="view-message">
                            <button class="btn btn-primary mr-1">Edit</button>
                            <button class="btn btn-danger">Delete</button>
                          </td>
                        </tr>
                        <tr class="">
                          <td class="view-message">Form I</td>
                          <td class="view-message inbox-small-cells">B</td>
                          <td class="view-message inbox-small-cells">39</td>
                          <td class="view-message">
                            <button class="btn btn-primary mr-1">Edit</button>
                            <button class="btn btn-danger">Delete</button>
                          </td>
                        </tr>
                        <tr class="">
                          <td class="view-message">Form II</td>
                          <td class="view-message inbox-small-cells">A</td>
                          <td class="view-message inbox-small-cells">37</td>
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
  
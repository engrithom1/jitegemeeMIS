<template>
    <div class="midde_cont">
      <div class="container-fluid">
        <div class="row column_title">
          <div class="col-md-12">
            <div class="page_title">
              <h2>Admission > All Students</h2>
            </div>
          </div>
        </div>
        <!--contents heaa-->
        <div class="row column4 graph">
          <div class="col-12">
            <div class="white_shd full margin_bottom_30">
            <div class="full graph_head">
              <div class="d-flex justify-content-between">
                <div class="heading1 margin_0 "><h2>All Students</h2></div>
                <!--button v-on:click="this.parentExist" class="btn btn-success ml-0">Add Parent</button-->
              </div>
            </div>
            <div class="full progress_bar_inner">
              <div class="row">
                <div class="col-md-12">
                  <div class="inbox-head">
                      <h3>found (4810)</h3>
                      <form action="#" class="pull-right position search_inbox">
                        <div class="input-append">
                            <input type="text" class="sr-input" placeholder="Search students">
                            <button class="btn sr-btn" type="button"><i class="fa fa-search"></i></button>
                        </div>
                      </form>
                  </div>
                  <div class="inbox-body">
                  <div class="mail-option">
                    <div class="btn-group hidden-phone">
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
                    <div class="btn-group">
                      <select class="form-control" name="" id="">
                        <option value="">All Class</option>
                        <option value="">Class A</option>
                        <option value="">Class B</option>
                        <option value="">Class C</option>
                        <option value="">Class D</option>
                      </select> 
                    </div>
                    <ul class="unstyled inbox-pagination mb-3">
                        <li><span>1-50 of 234</span></li>
                        <li>
                          <a class="np-btn" href="#"><i class="fa fa-angle-left  pagination-left"></i></a>
                        </li>
                        <li>
                          <a class="np-btn" href="#"><i class="fa fa-angle-right pagination-right"></i></a>
                        </li>
                    </ul>
                    <table class="table table-inbox table-hover">
                      <thead>
                        <th><b>Index Number</b></th>
                        <th><b>Full Name</b></th>
                        <th><b>Action</b></th>
                      </thead>
                      <tbody>
                        <tr class="">
                          <td class="view-message">23-3489</td>
                          <td class="view-message inbox-small-cells">Sambokile kandenga kindeki</td>
                          <td class="view-message">
                            <button class="btn btn-primary mr-1">Edit</button>
                            <button class="btn btn-info">Preview</button>
                          </td>
                        </tr>
                        <tr class="">
                          <td class="view-message">24-1232</td>
                          <td class="view-message inbox-small-cells">John sabas komba</td>
                          <td class="view-message">
                            <button class="btn btn-primary mr-1">Edit</button>
                            <button class="btn btn-info">Preview</button>
                          </td>
                        </tr>
                        <tr class="">
                          <td class="view-message">22-1232</td>
                          <td class="view-message inbox-small-cells">Nawene bob Gingo</td>
                          <td class="view-message">
                            <button class="btn btn-primary mr-1">Edit</button>
                            <button class="btn btn-info">Preview</button>
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
  
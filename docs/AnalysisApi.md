# DeepVissOps.AnalysisApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**imageAnalysis**](AnalysisApi.md#imageAnalysis) | **POST** /analysis/Image | Analyze a single image
[**imageArrayAnalysis**](AnalysisApi.md#imageArrayAnalysis) | **POST** /analysis/ImagesArray | Analyze an array of images
[**processingRequest**](AnalysisApi.md#processingRequest) | **POST** /analysis/ProcessingRequest | Analyze a specific frame



## imageAnalysis

> [Frame] imageAnalysis(opts)

Analyze a single image

### Example

```javascript
import DeepVissOps from 'deep_viss_ops';

let apiInstance = new DeepVissOps.AnalysisApi();
let opts = {
  'streamId': "streamId_example", // String | The identifier of the stream
  'filename': "/path/to/file" // [File] | 
};
apiInstance.imageAnalysis(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **streamId** | **String**| The identifier of the stream | [optional] 
 **filename** | **[File]**|  | [optional] 

### Return type

[**[Frame]**](Frame.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## imageArrayAnalysis

> [Frame] imageArrayAnalysis(opts)

Analyze an array of images

### Example

```javascript
import DeepVissOps from 'deep_viss_ops';

let apiInstance = new DeepVissOps.AnalysisApi();
let opts = {
  'streamId': "streamId_example", // String | The identifier of the stream
  'filename': "/path/to/file" // [File] | 
};
apiInstance.imageArrayAnalysis(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **streamId** | **String**| The identifier of the stream | [optional] 
 **filename** | **[File]**|  | [optional] 

### Return type

[**[Frame]**](Frame.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## processingRequest

> [Frame] processingRequest(processingRequest, opts)

Analyze a specific frame

### Example

```javascript
import DeepVissOps from 'deep_viss_ops';

let apiInstance = new DeepVissOps.AnalysisApi();
let processingRequest = new DeepVissOps.ProcessingRequest(); // ProcessingRequest | Deliver the image to be analyzed *Markdown*
let opts = {
  'streamId': "streamId_example" // String | The identifier of the stream
};
apiInstance.processingRequest(processingRequest, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processingRequest** | [**ProcessingRequest**](ProcessingRequest.md)| Deliver the image to be analyzed *Markdown* | 
 **streamId** | **String**| The identifier of the stream | [optional] 

### Return type

[**[Frame]**](Frame.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/xml
- **Accept**: application/json

